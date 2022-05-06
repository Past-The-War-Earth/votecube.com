import { Inject, Injected } from "@airport/direction-indicator"
import { IInterAppAPIClient } from "@airport/ground-control"
import { IIdeaSituation } from "../../generated/interfaces"
import { IDEA_SITUATION_API } from "../common-tokens"

@Injected()
export class IdeaSituationApi {

    @Inject()
    interAppApiClient: IInterAppAPIClient

    async add(
        ideaSituation: IIdeaSituation
    ): Promise<void> {
        return await this.interAppApiClient.invokeApiMethod(
            IDEA_SITUATION_API, 'add', [ideaSituation])
    }

}