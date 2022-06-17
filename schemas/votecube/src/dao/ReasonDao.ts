import { Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { Reason, SituationIdea } from "../ddl/ddl";
import { BaseReasonDao } from "../generated/baseDaos";
import { Q, QReason, QSituationIdea } from "../generated/generated";

@Injected()
export class ReasonDao
    extends BaseReasonDao {

    async findAllForSituationIdea(
        situationIdea: SituationIdea
    ): Promise<Reason[]> {
        let r: QReason,
            si: QSituationIdea
        return await this._find({
            select: {
                uuId: Y,
                factor: {
                    uuId: Y
                },
                position: {
                    uuId: Y
                }
            },
            from: [
                r = Q.Reason,
                si = r.situationIdea.leftJoin()
            ],
            where: si.equals(situationIdea)
        })
    }

}