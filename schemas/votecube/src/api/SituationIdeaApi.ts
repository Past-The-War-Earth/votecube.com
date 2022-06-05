import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { ISituationIdeaDao } from "../dao/dao";
import { ISituationIdea } from "../generated/interfaces";

export interface IIdeaSituationApi {

    add(
        ideaSituation: ISituationIdea
    ): Promise<void>

}

@Injected()
export class IdeaSituationApi
    implements IIdeaSituationApi {

    @Inject()
    situationIdeaDao: ISituationIdeaDao

    @Api()
    async add(
        situationIdea: ISituationIdea
    ): Promise<void> {

        await this.situationIdeaDao.save(situationIdea)
    }

}
