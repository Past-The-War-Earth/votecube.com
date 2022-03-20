import { Api } from "@airport/check-in";
import { container, DI } from "@airport/di";
import { IIdeaSituation } from "../generated/generated";
import { IDEA_SITUATION_DAO } from "../server-tokens";
import { IDEA_SITUATION_API } from "../tokens";

export interface IIdeaSituationApi {

    add(
        ideaSituation: IIdeaSituation
    ): Promise<void>

}

export class IdeaSituationApi
    implements IIdeaSituationApi {

    @Api()
    async add(
        ideaSituation: IIdeaSituation
    ): Promise<void> {
        const ideaSituationDao = await container(this).get(IDEA_SITUATION_DAO)

        await ideaSituationDao.save(ideaSituation)
    }

}
DI.set(IDEA_SITUATION_API, IdeaSituationApi)
