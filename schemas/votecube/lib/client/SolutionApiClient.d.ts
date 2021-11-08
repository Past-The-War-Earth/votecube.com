import { DeepPartial } from "@airport/pressurization";
import { Solution } from "../ddl/ddl";
export declare class SolutionApiClient {
    saveSolution(solution: DeepPartial<Solution>): Promise<void>;
    getMySolutionForSituation(situationRepositoryUuid: string): Promise<Solution>;
}
//# sourceMappingURL=SolutionApiClient.d.ts.map