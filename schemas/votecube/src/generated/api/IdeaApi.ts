import {
	IDEA_API,
} from '../../to_be_generated/common-tokens';
import {
	DEPENDENCY_INJECTION,
	Inject,
	Injected,
} from '@airport/direction-indicator';
import {
	Api,
} from '@airport/check-in';
import {
	IdeaDao,
} from '../../dao/dao';
import {
	ILabel,
	IIdea,
} from '../../generated/interfaces';
import {
	IRepositoryIdentifier,
} from '../../types';


export interface IIdeaApi {
    getIdeasForLabels(labels: ILabel[]): Promise<IIdea[]>;
    getLeafIdeas(idea: IIdea): Promise<IIdea[]>;
    getStemIdea(idea: IIdea): Promise<IIdea>;
    getIdea(repositorySource: string, ideaRepositoryUuId: string): Promise<IIdea>;
    saveExistingIdea(idea: IIdea): Promise<IRepositoryIdentifier>;
    saveNewIdea(idea: IIdea): Promise<IRepositoryIdentifier>;
}

// An API stub for other Applications and UIs to use
@Injected()
export class IdeaApi {

    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, IDEA_API)
    }
        
    @Inject()
    ideaApi: IdeaApi
            
    async  getIdeasForLabels(
        labels: ILabel[]
    ): Promise<IIdea[]> {
        return await this.ideaApi.getIdeasForLabels(labels)
    }

    async  getLeafIdeas(
        idea: IIdea
    ): Promise<IIdea[]> {
        return await this.ideaApi.getLeafIdeas(idea)
    }

    async  getStemIdea(
        idea: IIdea
    ): Promise<IIdea> {
        return await this.ideaApi.getStemIdea(idea)
    }

    async  getIdea(
        repositorySource: string,
        ideaRepositoryUuId: string
    ): Promise<IIdea> {
        return await this.ideaApi.getIdea(
            repositorySource,
            ideaRepositoryUuId
        )
    }

    async  saveExistingIdea(
        idea: IIdea
    ): Promise<IRepositoryIdentifier> {
        return await this.ideaApi.saveExistingIdea(idea)
    }

    async  saveNewIdea(
        idea: IIdea
    ): Promise<IRepositoryIdentifier> {
        return await this.ideaApi.saveNewIdea(idea)
    }

}
