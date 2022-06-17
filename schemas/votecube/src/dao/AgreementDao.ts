import { and, Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { QActor } from "@airport/holding-pattern";
import { QUser, User } from "@airport/travel-document-checkpoint";
import { Agreement, SituationIdea } from "../ddl/ddl";
import { BaseAgreementDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
import { QAgreement, QAgreementReason, QSituationIdea } from "../generated/qInterfaces";

@Injected()
export class AgreementDao
    extends BaseAgreementDao {

    async findForSituationIdeaAndUser(
        situationIdeaUuid: string | SituationIdea,
        userUuId: string
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
                situationIdea: {
                    agreementShareTotal: Y,
                    numberOfAgreements: Y,
                }
            },
            from: [
                ag = Q.Agreement,
                a = ag.actor.leftJoin(),
                u = a.user.leftJoin(),
                si = ag.situationIdea.leftJoin()
            ],
            where: and(
                si.equals(situationIdeaUuid),
                u.equals(userUuId)
            )
        })
    }

    async findAllAgreementSharesForSituationIdea(
        situationIdeaUuId: string | SituationIdea
    ): Promise<Agreement[]> {
        let si: QSituationIdea,
            a: QAgreement,
            ar: QAgreementReason
        return await this._find({
            select: {
                agreementReasons: {
                    share: Y,
                }
            },
            from: [
                a = Q.Agreement,
                si = a.situationIdea.innerJoin(),
                ar = a.agreementReasons.innerJoin()
            ],
            where: and(
                si.equals(situationIdeaUuId),
                ar.share.greaterThan(0)
            )
        })
    }
}