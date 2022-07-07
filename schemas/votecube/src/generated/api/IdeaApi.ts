import {
    IDEA_API,
} from '../../to_be_generated/common-tokens';
import {
    DEPENDENCY_INJECTION,
    Inject,
    Injected,
} from '@airport/direction-indicator';
import {
    Idea,
    Label,
} from '../../ddl/ddl';
import { IRepositoryIdentifier } from '@airport/holding-pattern';


export interface IIdeaApi {
    getIdeasForLabels(labels: Label[]): Promise<Idea[]>;
    getLeafIdeas(idea: Idea): Promise<Idea[]>;
    getStemIdea(idea: Idea): Promise<Idea>;
    getIdea(repositorySource: string, ideaRepositoryUuId: string): Promise<Idea>;
    saveExistingIdea(idea: Idea): Promise<IRepositoryIdentifier>;
    saveNewIdea(idea: Idea): Promise<IRepositoryIdentifier>;
}

// An API stub for other Applications and UIs to use
@Injected()
export class IdeaApi {

    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, IDEA_API)
    }

    @Inject()
    ideaApi: IdeaApi

    async getIdeasForLabels(
        labels: Label[]
    ): Promise<Idea[]> {
        return await this.ideaApi.getIdeasForLabels(labels)
    }

    async getLeafIdeas(
        idea: Idea
    ): Promise<Idea[]> {
        return await this.ideaApi.getLeafIdeas(idea)
    }

    async getStemIdea(
        idea: Idea
    ): Promise<Idea> {
        return await this.ideaApi.getStemIdea(idea)
    }

    async getIdea(
        repositorySource: string,
        ideaRepositoryUuId: string
    ): Promise<Idea> {
        return await this.ideaApi.getIdea(
            repositorySource,
            ideaRepositoryUuId
        )
    }

    async saveExistingIdea(
        idea: Idea
    ): Promise<IRepositoryIdentifier> {
        return await this.ideaApi.saveExistingIdea(idea)
    }

    async saveNewIdea(
        idea: Idea
    ): Promise<IRepositoryIdentifier> {
        return await this.ideaApi.saveNewIdea(idea)
    }

}
