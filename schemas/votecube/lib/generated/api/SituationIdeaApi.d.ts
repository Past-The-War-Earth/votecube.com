import { ISituationIdea } from '../../generated/interfaces';
export interface ISituationIdeaApi {
    add(situationIdea: ISituationIdea): Promise<void>;
}
export declare class SituationIdeaApi {
    constructor();
    situationIdeaApi: SituationIdeaApi;
    add(situationIdea: ISituationIdea): Promise<void>;
}
//# sourceMappingURL=SituationIdeaApi.d.ts.map