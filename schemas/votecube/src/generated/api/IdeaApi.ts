import {
	IDEA_API,
} from '../../to_be_generated/common-tokens';
import {
	DEPENDENCY_INJECTION,
	Inject,
	Injected,
} from '@airport/direction-indicator';
import {
	byId,
	exists,
	isNull,
	or,
} from '@airbridge/validate';
import {
	RequestManager,
} from '@airport/arrivals-n-departures';
import {
	Api,
} from '@airport/check-in';
import {
	IRepositoryIdParts,
} from '@airport/ground-control';
import {
	IdeaDao,
} from '../../dao/dao';
import {
	Idea,
	Label,
} from '../../ddl/ddl';
import {
	IdeaDvo,
} from '../../dvo/IdeaDvo';


export interface IIdeaApi {
    getIdeasForLabels(labels: Label[]): Promise<Idea[]>;
    getLeafIdeas(idea: Idea): Promise<Idea[]>;
    getStemIdea(idea: Idea): Promise<Idea>;
    getIdea(repositorySource: string, ideaRepositoryUuId: string): Promise<Idea>;
    saveIdea(idea: Idea): Promise<IRepositoryIdParts>;
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
        labels: Label[]
    ): Promise<Idea[]> {
        return await this.ideaApi.getIdeasForLabels(labels)
    }

    async  getLeafIdeas(
        idea: Idea
    ): Promise<Idea[]> {
        return await this.ideaApi.getLeafIdeas(idea)
    }

    async  getStemIdea(
        idea: Idea
    ): Promise<Idea> {
        return await this.ideaApi.getStemIdea(idea)
    }

    async  getIdea(
        repositorySource: string,
        ideaRepositoryUuId: string
    ): Promise<Idea> {
        return await this.ideaApi.getIdea(
            repositorySource,
            ideaRepositoryUuId
        )
    }

    async  saveIdea(
        idea: Idea
    ): Promise<IRepositoryIdParts> {
        return await this.ideaApi.saveIdea(idea)
    }

}
