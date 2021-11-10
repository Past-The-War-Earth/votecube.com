import { ISolution } from "../generated/interfaces";
export interface ISolutionApi {
    saveSolution(solution: ISolution): Promise<void>;
    getMySolutionForSituation(situationRepositoryUuid: string): Promise<ISolution>;
}
export declare class SolutionApi implements ISolutionApi {
    saveSolution(solution: ISolution): Promise<void>;
    getMySolutionForSituation(situationRepositoryUuid: string): Promise<ISolution>;
}
//# sourceMappingURL=SolutionApi.d.ts.map