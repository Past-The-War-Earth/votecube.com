import { Injected } from '@airport/direction-indicator';
import { QUser, User } from '@airport/travel-document-checkpoint';
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
import { and, Y } from '@airport/air-traffic-control';

export interface IIdeaRatingDao
    extends IBaseIdeaRatingDao {

    findForSituationIdeaAndUser(
        situationIdea: SituationIdea | string,
        user: User | string
    ): Promise<IdeaRating>

    findForIdeaOnlyAndUser(
        idea: Idea | string,
        user: User | string
    ): Promise<IdeaRating>

}

@Injected()
export class IdeaRatingDao
    extends BaseIdeaRatingDao
    implements IIdeaRatingDao {

    async findForSituationIdeaAndUser(
        situationIdea: SituationIdea | string,
        user: User | string
    ): Promise<IdeaRating> {
        let ir: QIdeaRating,
            a: QActor,
            u: QUser,
            si: QSituationIdea
        return await this._findUnique({
            select: {
                '*': Y
            },
            from: [
                ir = Q.IdeaRating,
                a = ir.actor.leftJoin(),
                u = a.user.leftJoin(),
                si = ir.situationIdea.leftJoin()
            ],
            where: and(
                si.equals(situationIdea),
                u.equals(user)
            )
        })
    }

    async findForIdeaOnlyAndUser(
        idea: Idea | string,
        user: User | string
    ): Promise<IdeaRating> {
        let ir: QIdeaRating,
            a: QActor,
            u: QUser,
            i: QIdea
        return await this._findUnique({
            select: {
                '*': Y
            },
            from: [
                ir = Q.IdeaRating,
                a = ir.actor.leftJoin(),
                u = a.user.leftJoin(),
                i = ir.idea.leftJoin()
            ],
            where: and(
                i.equals(idea),
                ir.situationIdea.isNull(),
                u.equals(user)
            )
        })
    }

}
