import {
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


// An API stub for other Applications and UIs to use
@Injected()
export class IdeaApi {

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
