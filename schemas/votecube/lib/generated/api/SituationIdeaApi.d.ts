import { ISituationIdea } from '../../generated/interfaces';
export interface IIdeaSituationApi {
    add(ideaSituation: ISituationIdea): Promise<void>;
}
export declare class IdeaSituationApi {
    constructor();
    ideaSituationApi: IdeaSituationApi;
    add(situationIdea: ISituationIdea): Promise<void>;
}
//# sourceMappingURL=SituationIdeaApi.d.ts.map