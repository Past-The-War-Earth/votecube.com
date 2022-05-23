import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { IIdeaSituationDao } from "../dao/dao";
import { IIdeaSituation } from "../generated/interfaces";

export interface IIdeaSituationApi {

    add(
        ideaSituation: IIdeaSituation
    ): Promise<void>

}

@Injected()
export class IdeaSituationApi
    implements IIdeaSituationApi {

    @Inject()
    ideaSituationDao: IIdeaSituationDao

    @Api()
    async add(
        ideaSituation: IIdeaSituation
    ): Promise<void> {

        await this.ideaSituationDao.save(ideaSituation)
    }

}
