import { DeepPartial } from "@airport/pressurization";
import { Category, Situation } from "../ddl/ddl";
export declare class SituationApiClient {
    getSituationsForCategory(category: DeepPartial<Category>): Promise<DeepPartial<Situation>[]>;
    getLeafSituations(situation: DeepPartial<Situation>): Promise<DeepPartial<Situation>[]>;
    getStemSituation(situation: DeepPartial<Situation>): Promise<DeepPartial<Situation>>;
    saveSituation(situation: DeepPartial<Situation>): Promise<void>;
}
//# sourceMappingURL=SituationApiClient.d.ts.map