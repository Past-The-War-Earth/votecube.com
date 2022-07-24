import { Injected } from '@airport/direction-indicator';
import { QUserAccount, UserAccount } from '@airport/travel-document-checkpoint';
import {
    BaseIdeaRatingDao,
    IBaseIdeaRatingDao,
    Q,
    QIdea,
    QIdeaRating,
    QSituationIdea,
} from "../generated/generated";
import { Idea, IdeaRating, SituationIdea } from '../ddl/ddl';
import { QActor } from '@airport/holding-pattern';
import { AND, Y } from '@airport/tarmaq-query';

export interface IIdeaRatingDao
    extends IBaseIdeaRatingDao {

    findForSituationIdeaAndUser(
        situationIdea: SituationIdea | string,
        user: UserAccount | string
    ): Promise<IdeaRating>

    findForIdeaOnlyAndUser(
        idea: Idea | string,
        user: UserAccount | string
    ): Promise<IdeaRating>

}

@Injected()
export class IdeaRatingDao
    extends BaseIdeaRatingDao
    implements IIdeaRatingDao {

    async findForSituationIdeaAndUser(
        situationIdea: SituationIdea | string,
        user: UserAccount | string
    ): Promise<IdeaRating> {
        let ir: QIdeaRating,
            a: QActor,
            u: QUserAccount,
            si: QSituationIdea
        return await this._findUnique({
            SELECT: {
                '*': Y
            },
            FROM: [
                ir = Q.IdeaRating,
                a = ir.actor.leftJoin(),
                u = a.userAccount.leftJoin(),
                si = ir.situationIdea.leftJoin()
            ],
            WHERE: AND(
                si.equals(situationIdea),
                u.equals(user)
            )
        })
    }

    async findForIdeaOnlyAndUser(
        idea: Idea | string,
        user: UserAccount | string
    ): Promise<IdeaRating> {
        let ir: QIdeaRating,
            a: QActor,
            u: QUserAccount,
            i: QIdea
        return await this._findUnique({
            SELECT: {
                '*': Y
            },
            FROM: [
                ir = Q.IdeaRating,
                a = ir.actor.leftJoin(),
                u = a.userAccount.leftJoin(),
                i = ir.idea.leftJoin()
            ],
            WHERE: AND(
                i.equals(idea),
                ir.situationIdea.isNull(),
                u.equals(user)
            )
        })
    }

}
