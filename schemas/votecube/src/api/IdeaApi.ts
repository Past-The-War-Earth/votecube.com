import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { IdeaDao } from "../dao/dao"
import {
    ILabel,
    IIdea
} from "../generated/generated";
import { IRepositoryIdentifier } from "../types";

export interface IIdeaApi {

    getIdeasForLabels(
        labels: ILabel[]
    ): Promise<IIdea[]>

    getLeafIdeas(
        idea: IIdea
    ): Promise<IIdea[]>

    getStemIdea(
        idea: IIdea
    ): Promise<IIdea>

    getIdea(
        repositorySource: string,
        ideaRepositoryUuId: string
    ): Promise<IIdea>

    saveExistingIdea(
        idea: IIdea
    ): Promise<IRepositoryIdentifier>

    saveNewIdea(
        idea: IIdea
    ): Promise<IRepositoryIdentifier>

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

    @Api()
    async getIdeasForLabels(
        labels: ILabel[]
    ): Promise<IIdea[]> {
        return []
    }

    @Api()
    async getLeafIdeas(
        idea: IIdea
    ): Promise<IIdea[]> {
        return []
    }

    @Api()
    async getStemIdea(
        idea: IIdea
    ): Promise<IIdea> {
        return null
    }

    @Api()
    async getIdea(
        repositorySource: string,
        ideaRepositoryUuId: string
    ): Promise<IIdea> {
        return await this.ideaDao.findByRepositoryUuId(repositorySource, ideaRepositoryUuId)
    }

    @Api()
    async saveExistingIdea(
        idea: IIdea
    ): Promise<IRepositoryIdentifier> {
        if (!idea.repository || !idea.repository.id
            || !idea.actor || !idea.actor.id
            || !idea.actorRecordId) {
            throw new Error(`Cannot save EXISTING idea without a repository, an actor and an actorRecordId`)
        }
        return await this.ideaDao.saveExistingIdea(idea)
    }

    @Api()
    async saveNewIdea(
        idea: IIdea
    ): Promise<IRepositoryIdentifier> {
        idea.repository = null
        idea.actor = null
        delete idea.actorRecordId

        // const [entityStateManager, forumThreadApi, ideaDao] = await container(this)
        //     .get(ENTITY_STATE_MANAGER, FORUM_THREAD_API, IDEA_DAO)

        // const forumThread = await forumThreadApi.createNew()

        // const forumThreadStub: IForumThread = {
        //     actor: {
        //         id: forumThread.actor.id
        //     },
        //     actorRecordId: forumThread.actorRecordId,
        //     repository: {
        //         id: forumThread.repository.id
        //     },
        // } as IForumThread

        // entityStateManager.markAsStub(forumThreadStub)

        // idea.thread = forumThreadStub

        return await this.ideaDao.saveNewIdea(idea)
    }

}
