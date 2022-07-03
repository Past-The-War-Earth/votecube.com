import { RequestManager } from "@airport/arrivals-n-departures";
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { IRepositoryIdParts } from "@airport/ground-control";
import { IdeaDao } from "../dao/dao"
import { Idea, Label } from "../ddl/ddl";

export interface IIdeaApi {

    getIdeasForLabels(
        labels: Label[]
    ): Promise<Idea[]>

    getLeafIdeas(
        idea: Idea
    ): Promise<Idea[]>

    getStemIdea(
        idea: Idea
    ): Promise<Idea>

    getIdea(
        repositorySource: string,
        ideaRepositoryUuId: string
    ): Promise<Idea>

    saveIdea(
        idea: Idea
    ): Promise<IRepositoryIdParts>

}

/**
 * Version 1 idea retrieval across devices.
 * 
 * - no search capabilities (Vespa is not yet integrated)
 * - a repository private (writable) repository transaction log is maintained in ScyllaDb
 * - the private Uuid of the user hardcoded
 * - the transaction logs for a given repository are retrieved by user private Uuid and
 *       the repositoryUuid
 * - on-going record retrieval also accepts "sinceTime" parameter that retrieves only
 * the logs entered since that time
 * 
 * Thus - the search for  a idea is done via a repositoryUuid.  AIRport retrieves
 * the entire reposiory and then does a local search for all Ideas that have that
 * repository id and returns the first one found (there should only be one).
 */

@Injected()
export class IdeaApi
    implements IIdeaApi {

    @Inject()
    ideaDao: IdeaDao

    @Inject()
    requestManager: RequestManager

    @Api()
    async getIdeasForLabels(
        labels: Label[]
    ): Promise<Idea[]> {
        return []
    }

    @Api()
    async getLeafIdeas(
        idea: Idea
    ): Promise<Idea[]> {
        return []
    }

    @Api()
    async getStemIdea(
        idea: Idea
    ): Promise<Idea> {
        return null
    }

    @Api()
    async getIdea(
        repositorySource: string,
        ideaRepositoryUuId: string
    ): Promise<Idea> {
        return await this.ideaDao.findByRepositoryUuId(repositorySource, ideaRepositoryUuId)
    }

    @Api()
    async saveIdea(
        idea: Idea
    ): Promise<IRepositoryIdParts> {
        idea.repository = null
        idea.actor = null
        delete idea.actorRecordId

        let parentIdea: Idea = idea.parent
        if (idea.parent) {
            if (!parentIdea.uuId) {
                throw new Error(`Parent idea must have an Id`)
            }
            parentIdea = await this.ideaDao.findByUuId(parentIdea)
        }
        idea.parent = parentIdea

        if (idea.userAgreement) {
            idea.userAgreement.actor = this.requestManager.actor
        }

        if (idea.userIdeaRating) {
            idea.userIdeaRating.actor = this.requestManager.actor
        }

        const saveResult = await this.ideaDao.save(idea)

        return saveResult.repositoryIdParts
    }

}
