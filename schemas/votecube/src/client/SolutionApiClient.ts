import { IOC } from "@airport/di";
import { ISolution } from "../generated/interfaces";
import { SOLUTION_API } from "../tokens";

export class SolutionApiClient {

    async saveSolution(
        solution: ISolution
    ): Promise<void> {
        const solutionApi = await IOC.get(SOLUTION_API)

        return await solutionApi.saveSolution(solution)
    }

    async getMySolutionForSituation(
        situationRepositoryUuid: string
    ): Promise<ISolution> {
        const solutionApi = await IOC.get(SOLUTION_API)

        return await solutionApi.getMySolutionForSituation(situationRepositoryUuid)
    }

}
