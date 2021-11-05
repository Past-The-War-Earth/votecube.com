import { DI } from '@airport/di';
import { SOLUTION_MANAGER } from '../tokens';
export class SolutionManager {
    async getSolutionForSituation(
    // User-information is in AIRport
    situation) {
        if (!situation) {
            return this.getStubSolution();
        }
        // TODO: add AIRport call for data
        return null;
    }
    async saveSolution(situation) {
    }
    getStubSolution() {
        return {
            1: {
                factorNumber: 1,
                outcome: 'A',
                value: 33
            },
            2: {
                factorNumber: 2,
                outcome: 'A',
                value: 33
            },
            3: {
                factorNumber: 2,
                outcome: 'B',
                value: 34
            }
        };
    }
    dbToUi(solution) {
        return null;
    }
    uiToDb(vote) {
        return null;
    }
}
DI.set(SOLUTION_MANAGER, SolutionManager);
//# sourceMappingURL=SolutionManager.js.map