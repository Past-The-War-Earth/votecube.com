import { ICategory, ISituation } from "../server";
export interface ISituationApi {
    getSituationsForCategory(category: ICategory): Promise<ISituation[]>;
    getLeafSituations(situation: ISituation): Promise<ISituation[]>;
    getStemSituation(situation: ISituation): Promise<ISituation>;
    saveSituation(situation: ISituation): Promise<void>;
}
export declare class SituationApi implements ISituationApi {
    getSituationsForCategory(category: ICategory): Promise<ISituation[]>;
    getLeafSituations(situation: ISituation): Promise<ISituation[]>;
    getStemSituation(situation: ISituation): Promise<ISituation>;
    saveSituation(situation: ISituation): Promise<void>;
}
//# sourceMappingURL=SituationApi.d.ts.map