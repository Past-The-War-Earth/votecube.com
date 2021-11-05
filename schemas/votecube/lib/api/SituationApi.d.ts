import { DeepPartial } from "@airport/pressurization";
import { Category, Situation } from "../ddl/ddl";
export interface ISituationApi {
    getSituationsForCategory(category: DeepPartial<Category>): Promise<DeepPartial<Situation>[]>;
    getLeafSituations(situation: DeepPartial<Situation>): Promise<DeepPartial<Situation>[]>;
    getStemSituation(situation: DeepPartial<Situation>): Promise<DeepPartial<Situation>>;
    saveSituation(situation: DeepPartial<Situation>): Promise<void>;
}
export declare class SituationApi implements ISituationApi {
    getSituationsForCategory(category: DeepPartial<Category>): Promise<DeepPartial<Situation>[]>;
    getLeafSituations(situation: DeepPartial<Situation>): Promise<DeepPartial<Situation>[]>;
    getStemSituation(situation: DeepPartial<Situation>): Promise<DeepPartial<Situation>>;
    saveSituation(situation: DeepPartial<Situation>): Promise<void>;
}
//# sourceMappingURL=SituationApi.d.ts.map