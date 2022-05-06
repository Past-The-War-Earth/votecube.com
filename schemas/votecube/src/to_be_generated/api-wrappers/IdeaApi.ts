import { Inject, Injected } from "@airport/direction-indicator"
import { IInterAppAPIClient } from "@airport/ground-control"
import { IIdea, ILabel } from "../../generated/interfaces"
import { IRepositoryIdentifier } from "../../types"
import { IDEA_API } from "../common-tokens"


@Injected()
export class IdeaApi {

    @Inject()
    interAppApiClient: IInterAppAPIClient

    async getIdeasForLabels(
        labels: ILabel[]
    ): Promise<IIdea[]> {
        return await this.interAppApiClient.invokeApiMethod(
            IDEA_API, 'getIdeasForLabels', [labels])
    }

    async getLeafIdeas(
        idea: IIdea
    ): Promise<IIdea[]> {
        return await this.interAppApiClient.invokeApiMethod(
            IDEA_API, 'getLeafIdeas', [idea])
    }

    async getStemIdea(
        idea: IIdea
    ): Promise<IIdea> {
        return await this.interAppApiClient.invokeApiMethod(
            IDEA_API, 'getStemIdea', [idea])
    }

    async getIdea(
        repositorySource: string,
        ideaRepositoryUuId: string
    ): Promise<IIdea> {
        return await this.interAppApiClient.invokeApiMethod(
            IDEA_API, 'getIdea', [repositorySource, ideaRepositoryUuId])
    }

    async saveExistingIdea(
        idea: IIdea
    ): Promise<IRepositoryIdentifier> {
        return await this.interAppApiClient.invokeApiMethod(
            IDEA_API, 'saveExistingIdea', [idea])
    }

    async saveNewIdea(
        idea: IIdea
    ): Promise<IRepositoryIdentifier> {
        return await this.interAppApiClient.invokeApiMethod(
            IDEA_API, 'saveNewIdea', [idea])
    }

}