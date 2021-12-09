import { container, DI } from '@airport/di';
import { SolutionApiClient } from '@votecube/votecube';
import { SITUATION_CONVERTER, SITUATION_MANAGER, SOLUTION_CONVERTER, SOLUTION_MANAGER } from '../tokens';
export class SolutionManager {
    constructor() {
        this.solutionApi = new SolutionApiClient();
    }
    async getSolutionForSituation(
    // User-information is in AIRport
    situationRepositoryUuid) {
        if (!situationRepositoryUuid || situationRepositoryUuid === 'unsolved') {
            return this.getStubSolution();
        }
        let solution = await this.solutionApi
            .getMySolutionForSituation(situationRepositoryUuid);
        if (!solution) {
            return this.getStubSolution();
        }
        const solutionConverter = await container(this).get(SOLUTION_CONVERTER);
        return solutionConverter.dbToUi(solution);
    }
    async saveSolution(situation, solution) {
        const [situationConverter, solutionConverter] = await container(this)
            .get(SITUATION_CONVERTER, SOLUTION_CONVERTER);
        const dbSituation = situationConverter.uiToDb(situation);
        const dbSolution = solutionConverter.uiToDb(solution, situation.ageSuitability, dbSituation);
        await this.solutionApi.saveSolution(dbSolution);
    }
    async saveCachedSituationSolution(solution) {
        const situationManager = await container(this).get(SITUATION_MANAGER);
        await this.saveSolution(situationManager.cachedSituation.ui, solution);
    }
    getStubSolution() {
        return Object.assign(Object.assign({}, this.getStubIds()), { 1: Object.assign(Object.assign({}, this.getStubIds()), { factorNumber: 1, outcome: 'A', value: 33 }), 2: Object.assign(Object.assign({}, this.getStubIds()), { factorNumber: 2, outcome: 'A', value: 33 }), 3: Object.assign(Object.assign({}, this.getStubIds()), { factorNumber: 3, outcome: 'B', value: 34 }) });
    }
    getStubIds() {
        return {
            actorId: null,
            // actorUuId: null,
            actorRecordId: null,
            ageSuitability: null,
            repositoryId: null,
            // repositoryUuId: null,
        };
    }
}
DI.set(SOLUTION_MANAGER, SolutionManager);
//# sourceMappingURL=SolutionManager.js.map