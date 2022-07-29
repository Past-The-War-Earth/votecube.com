import { byId, exists, or } from "@airport/airbridge-validate";
import { RequestManager } from "@airport/arrivals-n-departures";
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { SituationApi } from "@sapoto/core";
import { ISituationIdeaDao } from "../dao/dao";
import { SituationIdea } from "../ddl/ddl";
import { SituationIdeaDvo } from "../dvo/SituationIdeaDvo";
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

    @Inject()
    situationIdeaDvo: SituationIdeaDvo

    @Api()
    async add(
        situationIdea: SituationIdea
    ): Promise<void> {
        // TODO: add validateNew to automate checking of
        // _actorRecordId: isNull()
        // actor: isNull()
        // repository: isNull()
        // Actually no need - if any of those fields are
        // present validator will fail, since they
        // don't have an explicit validator set
        this.situationIdeaDvo.validate(situationIdea, {
            idea: or(
                exists(byId()),
                {
                    // TODO: tie in validation from IdeaDvo (currently
                    // coded in IdeaApi)
                }
            ),
            situation: exists(byId())
        })

        await this.situationIdeaDao.save(situationIdea)
    }

}
