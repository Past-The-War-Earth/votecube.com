import { and, Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { SituationIdea } from "../ddl/ddl";
import { BaseSituationIdeaDao, IBaseSituationIdeaDao, Q, QAgreement, QAgreementReason, QSituationIdea } from "../generated/generated";

export interface ISituationIdeaDao
    extends IBaseSituationIdeaDao {

}

@Injected()
export class SituationIdeaDao
    extends BaseSituationIdeaDao
    implements ISituationIdeaDao {
        
}
