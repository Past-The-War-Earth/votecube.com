import type { ICategory, ISituation } from "../generated/generated";
export declare class SituationApiClient {
    getSituationsForCategory(category: ICategory): Promise<ISituation[]>;
    getLeafSituations(situation: ISituation): Promise<ISituation[]>;
    getStemSituation(situation: ISituation): Promise<ISituation>;
    saveSituation(situation: ISituation): Promise<void>;
}
//# sourceMappingURL=SituationApiClient.d.ts.map