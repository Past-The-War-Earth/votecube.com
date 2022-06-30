import { SituationIdea } from "../ddl/ddl";
import { BaseSituationIdeaDao, IBaseSituationIdeaDao } from "../generated/generated";
import { ITotalDelta } from "../ddl/TotalDelta";
export interface ISituationIdeaDao extends IBaseSituationIdeaDao {
    updateShareTotal(delta: ITotalDelta, situationIdea: SituationIdea): Promise<void>;
    updateUrgencyTotal(delta: ITotalDelta, situationIdea: SituationIdea): Promise<void>;
}
export declare class SituationIdeaDao extends BaseSituationIdeaDao implements ISituationIdeaDao {
    updateShareTotal(delta: ITotalDelta, situationIdea: SituationIdea): Promise<void>;
    updateUrgencyTotal(delta: ITotalDelta, situationIdea: SituationIdea): Promise<void>;
}
//# sourceMappingURL=SituationIdeaDao.d.ts.map