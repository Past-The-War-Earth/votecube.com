var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Api } from "@airport/check-in";
import { container, DI } from "@airport/di";
import { IDEA_API } from "../tokens";
import { IDEA_DAO } from "../server-tokens";
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
export class IdeaApi {
    async getIdeasForLabels(labels) {
        return [];
    }
    async getLeafIdeas(idea) {
        return [];
    }
    async getStemIdea(idea) {
        return null;
    }
    async getIdea(repositorySource, ideaRepositoryUuId) {
        const ideaDao = await container(this).get(IDEA_DAO);
        return await ideaDao.findByRepositoryUuId(repositorySource, ideaRepositoryUuId);
    }
    async saveExistingIdea(idea) {
        if (!idea.repository || !idea.repository.id
            || !idea.actor || !idea.actor.id
            || !idea.actorRecordId) {
            throw new Error(`Cannot save EXISTING idea without a repository, actor or actorRecordId`);
        }
        const ideaDao = await container(this).get(IDEA_DAO);
        return await ideaDao.saveExistingIdea(idea);
    }
    async saveNewIdea(idea) {
        idea.repository = null;
        idea.actor = null;
        delete idea.actorRecordId;
        const ideaDao = await container(this).get(IDEA_DAO);
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
        return await ideaDao.saveNewIdea(idea);
    }
}
__decorate([
    Api()
], IdeaApi.prototype, "getIdeasForLabels", null);
__decorate([
    Api()
], IdeaApi.prototype, "getLeafIdeas", null);
__decorate([
    Api()
], IdeaApi.prototype, "getStemIdea", null);
__decorate([
    Api()
], IdeaApi.prototype, "getIdea", null);
__decorate([
    Api()
], IdeaApi.prototype, "saveExistingIdea", null);
__decorate([
    Api()
], IdeaApi.prototype, "saveNewIdea", null);
DI.set(IDEA_API, IdeaApi);
//# sourceMappingURL=IdeaApi.js.map