import { DeepPartial } from '@airport/pressurization';
import { Situation } from '@votecube/votecube';
import { IUiSolution } from '@votecube/model';
export interface ISolutionManager {
    getSolutionForSituation(situationRepositoryUuId: string): Promise<IUiSolution>;
    saveSolution(situation: DeepPartial<Situation>): Promise<void>;
}
export declare class SolutionManager implements ISolutionManager {
    getSolutionForSituation(situationRepositoryUuid: string): Promise<IUiSolution>;
    saveSolution(situation: DeepPartial<Situation>): Promise<void>;
    private getStubSolution;
    private dbToUi;
    private uiToDb;
}
//# sourceMappingURL=SolutionManager.d.ts.map