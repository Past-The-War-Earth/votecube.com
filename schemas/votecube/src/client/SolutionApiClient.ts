import { IOC } from "@airport/di";
import { DeepPartial } from "@airport/pressurization";
import { Solution } from "../ddl/ddl";
import { SOLUTION_API } from "../tokens";

export class SolutionApiClient {

    async saveSolution(
        solution: DeepPartial<Solution>
    ): Promise<void> {
        const solutionApi = await IOC.get(SOLUTION_API)

        return await solutionApi.saveSolution(solution)
    }

    async getMySolutionForSituation(
        situationRepositoryUuid: string
    ): Promise<Solution> {
        const solutionApi = await IOC.get(SOLUTION_API)

        return await solutionApi.getMySolutionForSituation(situationRepositoryUuid)
    }

}
