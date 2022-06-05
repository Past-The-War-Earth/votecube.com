import { Injected } from "@airport/direction-indicator";
import { BaseSituationIdeaDao, IBaseSituationIdeaDao } from "../generated/generated";

export interface ISituationIdeaDao
    extends IBaseSituationIdeaDao {

}

@Injected()
export class SituationIdeaDao
    extends BaseSituationIdeaDao
    implements ISituationIdeaDao {

}
