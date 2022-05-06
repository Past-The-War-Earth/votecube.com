import { IOC } from "@airport/direction-indicator"
import { IIdeaSituation } from "../../generated/interfaces";
import { IDEA_SITUATION_API } from "../tokens";

export interface IIdeaSituationApi {

    add(
        ideaSituation: IIdeaSituation
    ): Promise<void>

}

export class IdeaSituationApiClient {

    async add(
        ideaSituation: IIdeaSituation
    ): Promise<void> {
        const ideaSituationApi = await IOC.get(IDEA_SITUATION_API)

        return await ideaSituationApi.add(ideaSituation)
    }

}