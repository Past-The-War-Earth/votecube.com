import { SolutionApiClient } from '@votecube/votecube';
import { IUiSituation, IUiSolution } from '@votecube/model';
export interface ISolutionManager {
    getSolutionForSituation(situationRepositoryUuId: string): Promise<IUiSolution>;
    saveSolution(situation: IUiSituation, solution: IUiSolution): Promise<void>;
}
export declare class SolutionManager implements ISolutionManager {
    solutionApi: SolutionApiClient;
    getSolutionForSituation(situationRepositoryUuid: string): Promise<IUiSolution>;
    saveSolution(situation: IUiSituation, solution: IUiSolution): Promise<void>;
    private getStubSolution;
    private getStubIds;
}
//# sourceMappingURL=SolutionManager.d.ts.map