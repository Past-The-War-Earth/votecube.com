import { DeepPartial } from "@airport/pressurization";
import { Solution } from "../ddl/ddl";
export interface ISolutionApi {
    saveSolution(solution: DeepPartial<Solution>): Promise<void>;
    getMySolutionForSituation(situationRepositoryUuid: string): Promise<Solution>;
}
export declare class SolutionApi implements ISolutionApi {
    saveSolution(solution: DeepPartial<Solution>): Promise<void>;
    getMySolutionForSituation(situationRepositoryUuid: string): Promise<Solution>;
}
//# sourceMappingURL=SolutionApi.d.ts.map