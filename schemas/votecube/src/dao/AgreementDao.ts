import { and, Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { QActor } from "@airport/holding-pattern";
import { QUser, User } from "@airport/travel-document-checkpoint";
import { Agreement, Idea, SituationIdea } from "../ddl/ddl";
import { BaseAgreementDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
import { QAgreement, QIdea, QSituationIdea } from "../generated/qInterfaces";

@Injected()
export class AgreementDao
    extends BaseAgreementDao {

    async findForSituationIdeaAndUser(
        situationIdea: SituationIdea | string,
        user: User | string
    ): Promise<Agreement> {
        let ag: QAgreement,
            a: QActor,
            u: QUser,
            si: QSituationIdea
        return await this._findUnique({
            select: {
                '*': Y,
                agreementReasons: {
                    '*': Y,
                    uuId: Y
                },
            },
            from: [
                ag = Q.Agreement,
                a = ag.actor.leftJoin(),
                u = a.user.leftJoin(),
                si = ag.situationIdea.leftJoin()
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
    ): Promise<Agreement> {
        let ag: QAgreement,
            a: QActor,
            u: QUser,
            i: QIdea
        return await this._findUnique({
            select: {
                '*': Y,
                agreementReasons: {
                    '*': Y,
                    uuId: Y
                },
            },
            from: [
                ag = Q.Agreement,
                a = ag.actor.leftJoin(),
                u = a.user.leftJoin(),
                i = ag.idea.leftJoin()
            ],
            where: and(
                i.equals(idea),
                ag.situationIdea.isNull(),
                u.equals(user)
            )
        })
    }

}