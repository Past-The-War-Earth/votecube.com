import { plus } from "@airport/tarmaq-query";
import { Injected } from "@airport/direction-indicator";
import { ITotalDelta } from "@sapoto/core";
import { SituationIdea } from "../ddl/ddl";
import { BaseSituationIdeaDao, IBaseSituationIdeaDao, Q } from "../generated/generated";

export interface ISituationIdeaDao
    extends IBaseSituationIdeaDao {

    updateShareTotal(
        delta: ITotalDelta,
        situationIdea: SituationIdea
    ): Promise<void>

    updateUrgencyTotal(
        delta: ITotalDelta,
        situationIdea: SituationIdea
    ): Promise<void>

}

@Injected()
export class SituationIdeaDao
    extends BaseSituationIdeaDao
    implements ISituationIdeaDao {

    async updateShareTotal(
        delta: ITotalDelta,
        situationIdea: SituationIdea
    ): Promise<void> {
        const si = Q.SituationIdea
        await this.db.updateWhere({
            update: si,
            set: {
                agreementShareTotal: plus(si.agreementShareTotal, delta.totalDelta),
                numberOfAgreements: plus(si.numberOfAgreements, delta.numberDelta)
            },
            where: si.equals(situationIdea)
        })
    }

    async updateUrgencyTotal(
        delta: ITotalDelta,
        situationIdea: SituationIdea
    ): Promise<void> {
        const si = Q.SituationIdea
        await this.db.updateWhere({
            update: si,
            set: {
                urgencyTotal: plus(si.urgencyTotal, delta.totalDelta),
                numberOfUrgencyRatings: plus(si.numberOfUrgencyRatings,
                    delta.numberDelta)
            },
            where: si.equals(situationIdea)
        })
    }
}
