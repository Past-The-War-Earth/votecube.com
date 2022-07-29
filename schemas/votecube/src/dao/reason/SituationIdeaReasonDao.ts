import { Y } from "@airport/tarmaq-query";
import { Injected } from "@airport/direction-indicator";
import { Reason, SituationIdea, SituationIdeaReason } from "../../ddl/ddl";
import { BaseSituationIdeaReasonDao, Q, QReason, QSituationIdea, QSituationIdeaReason } from "../../generated/generated";

@Injected()
export class SitutationIdeaReasonDao
    extends BaseSituationIdeaReasonDao {

    async findAllForSituationIdea(
        situationIdea: SituationIdea
    ): Promise<SituationIdeaReason[]> {
        let sir: QSituationIdeaReason,
            si: QSituationIdea
        return await this._find({
            SELECT: {
                '*': Y,
                reason: {
                    '*': Y,
                    factor: {},
                    position: {}
                }
            },
            FROM: [
                sir = Q.SituationIdeaReason,
                si = sir.situationIdea.LEFT_JOIN()
            ],
            WHERE: si.equals(situationIdea)
        })
    }

}