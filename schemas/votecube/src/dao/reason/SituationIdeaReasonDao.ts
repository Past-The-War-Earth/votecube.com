import { Y } from "@airport/tarmaq-query";
import { Injected } from "@airport/direction-indicator";
import { SituationIdea, SituationIdeaReason } from "../../ddl/ddl";
import { BaseSituationIdeaReasonDao } from "../../generated/baseDaos";
import { QSituationIdea, QSituationIdeaReason } from "../../generated/qInterfaces";
import { Q_localhost_colon_8000____at_votecube_slash_votecube as Q } from "../../generated/qApplication";

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