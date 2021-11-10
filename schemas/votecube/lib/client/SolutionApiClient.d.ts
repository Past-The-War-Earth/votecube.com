import { ISolution } from "../generated/interfaces";
export declare class SolutionApiClient {
    saveSolution(solution: ISolution): Promise<void>;
    getMySolutionForSituation(situationRepositoryUuid: string): Promise<ISolution>;
}
//# sourceMappingURL=SolutionApiClient.d.ts.map