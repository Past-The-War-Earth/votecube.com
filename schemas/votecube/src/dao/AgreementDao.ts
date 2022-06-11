import { and, Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { QActor } from "@airport/holding-pattern";
import { QUser, User } from "@airport/travel-document-checkpoint";
import { Agreement, SituationIdea } from "../ddl/ddl";
import { BaseAgreementDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
import { QAgreement } from "../generated/qInterfaces";

@Injected()
export class AgreementDao
    extends BaseAgreementDao {

    async findForSituationIdeaAndUser(
        situationIdeaOrUuid: string | SituationIdea,
        userOrUuId: string | User
    ): Promise<Agreement> {
        let ag: QAgreement,
            a: QActor,
            u: QUser
        return await this._findUnique({
            select: {
                '*': Y,
                agreementReasons: {
                    '*': Y,
                    uuId: Y
                }
            },
            from: [
                ag = Q.Agreement,
                a = ag.actor.leftJoin(),
                u = a.user.leftJoin()
            ],
            where: and(
                ag.situationIdea.equals(situationIdeaOrUuid),
                u.equals(userOrUuId)
            )
        })
    }
}