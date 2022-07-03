import { RequestManager } from "@airport/arrivals-n-departures";
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { SituationApi } from "@sapoto/core";
import { ISituationIdeaDao } from "../dao/dao";
import { SituationIdea } from "../ddl/ddl";
import { IdeaApi } from "./IdeaApi";

@Injected()
export class SituationIdeaApi {

    @Inject()
    ideaApi: IdeaApi

    @Inject()
    requestManager: RequestManager

    @Inject()
    situationApi: SituationApi

    @Inject()
    situationIdeaDao: ISituationIdeaDao

    @Api()
    async add(
        situationIdea: SituationIdea
    ): Promise<void> {
        if (situationIdea.uuId) {
            throw new Error(`New SituationIdea cannot have uuId defined`)
        }
        const situation = await this.situationApi.findById(situationIdea.situation)
        if (!situation) {
            throw new Error(`No situation "${situation.uuId}" found.`)
        }
        situationIdea.situation = situation
        if (!situationIdea.idea.uuId) {
            
        }

        await this.situationIdeaDao.save(situationIdea)
    }

}
