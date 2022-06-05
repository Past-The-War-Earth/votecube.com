import { ISituationIdeaDao } from "../dao/dao";
import { ISituationIdea } from "../generated/interfaces";
export interface ISituationIdeaApi {
    add(ideaSituation: ISituationIdea): Promise<void>;
}
export declare class SituationIdeaApi implements ISituationIdeaApi {
    situationIdeaDao: ISituationIdeaDao;
    add(situationIdea: ISituationIdea): Promise<void>;
}
//# sourceMappingURL=SituationIdeaApi.d.ts.map