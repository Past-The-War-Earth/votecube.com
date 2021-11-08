import { IOC } from "@airport/di";
import { SOLUTION_API } from "../tokens";
export class SolutionApiClient {
    async saveSolution(solution) {
        const solutionApi = await IOC.get(SOLUTION_API);
        return await solutionApi.saveSolution(solution);
    }
    async getMySolutionForSituation(situationRepositoryUuid) {
        const solutionApi = await IOC.get(SOLUTION_API);
        return await solutionApi.getMySolutionForSituation(situationRepositoryUuid);
    }
}
//# sourceMappingURL=SolutionApiClient.js.map