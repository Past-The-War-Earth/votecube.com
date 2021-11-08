import { Api } from "@airport/check-in";
import { DI } from "@airport/di";
import { DeepPartial } from "@airport/pressurization";
import { Solution } from "../ddl/ddl";
import { SOLUTION_API } from "../tokens";

export interface ISolutionApi {

    saveSolution(
        solution: DeepPartial<Solution>
    ): Promise<void>

    getMySolutionForSituation(
        situationRepositoryUuid: string
    ): Promise<Solution>

}

export class SolutionApi
    implements ISolutionApi {

    @Api()
    async saveSolution(
        solution: DeepPartial<Solution>
    ): Promise<void> {
        return null
    }

    @Api()
    async getMySolutionForSituation(
        situationRepositoryUuid: string
    ): Promise<Solution> {
        return null
    }

}
DI.set(SOLUTION_API, SolutionApi)
