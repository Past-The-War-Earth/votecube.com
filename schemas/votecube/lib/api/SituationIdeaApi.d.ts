import { ISituationIdeaDao } from "../dao/dao";
import { ISituationIdea } from "../generated/interfaces";
export interface IIdeaSituationApi {
    add(ideaSituation: ISituationIdea): Promise<void>;
}
export declare class IdeaSituationApi implements IIdeaSituationApi {
    situationIdeaDao: ISituationIdeaDao;
    add(situationIdea: ISituationIdea): Promise<void>;
}
//# sourceMappingURL=SituationIdeaApi.d.ts.map