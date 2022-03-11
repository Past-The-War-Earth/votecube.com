import { IOC } from "@airport/di"
import { IRepositoryIdentifier } from "./types";
import { ILabel, IIdea } from "../generated/interfaces";
import { IDEA_API } from "../tokens";

export class IdeaApiClient {

    async getIdeasForLabels(
        labels: ILabel[]
    ): Promise<IIdea[]> {
        const ideaApi = await IOC.get(IDEA_API)

        return await ideaApi.getIdeasForLabels(labels)
    }

    async getLeafIdeas(
        idea: IIdea
    ): Promise<IIdea[]> {
        const ideaApi = await IOC.get(IDEA_API)

        return await ideaApi.getLeafIdeas(idea)
    }

    async getStemIdea(
        idea: IIdea
    ): Promise<IIdea> {
        const ideaApi = await IOC.get(IDEA_API)

        return await ideaApi.getStemIdea(idea)
    }

    async getIdea(
        repositorySource: string,
        ideaRepositoryUuId: string
    ): Promise<IIdea> {
        const ideaApi = await IOC.get(IDEA_API)

        return await ideaApi.getIdea(repositorySource, ideaRepositoryUuId)
    }

    async saveExistingIdea(
        idea: IIdea
    ): Promise<IRepositoryIdentifier> {
        const ideaApi = await IOC.get(IDEA_API)

        return await ideaApi.saveExistingIdea(idea)
    }

    async saveNewIdea(
        idea: IIdea
    ): Promise<IRepositoryIdentifier> {
        const ideaApi = await IOC.get(IDEA_API)

        return await ideaApi.saveNewIdea(idea)
    }

}