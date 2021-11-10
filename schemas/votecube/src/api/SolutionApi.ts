import { Api } from "@airport/check-in";
import { DI } from "@airport/di";
import { ISolution } from "../generated/interfaces";
import { SOLUTION_API } from "../tokens";

export interface ISolutionApi {

    saveSolution(
        solution: ISolution
    ): Promise<void>

    getMySolutionForSituation(
        situationRepositoryUuid: string
    ): Promise<ISolution>

}

export class SolutionApi
    implements ISolutionApi {

    @Api()
    async saveSolution(
        solution: ISolution
    ): Promise<void> {
        return null
    }

    @Api()
    async getMySolutionForSituation(
        situationRepositoryUuid: string
    ): Promise<ISolution> {
        return null
    }

}
DI.set(SOLUTION_API, SolutionApi)
