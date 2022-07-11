var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
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
let IdeaApi = class IdeaApi {
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
        return await this.ideaDao.findByRepositoryGUID(repositorySource, ideaRepositoryUuId);
    }
    async saveIdea(idea) {
        idea.repository = null;
        idea.actor = null;
        delete idea._actorRecordId;
        let parentIdea = idea.parent;
        if (idea.parent) {
            if (!parentIdea.id) {
                throw new Error(`Parent idea must have an Id`);
            }
            parentIdea = await this.ideaDao.findOne(parentIdea);
        }
        idea.parent = parentIdea;
        if (idea.userAgreement) {
            idea.userAgreement.actor = this.requestManager.actor;
        }
        if (idea.userIdeaRating) {
            idea.userIdeaRating.actor = this.requestManager.actor;
        }
        const saveResult = await this.ideaDao.save(idea);
        return saveResult.repositoryIdParts;
    }
};
__decorate([
    Inject()
], IdeaApi.prototype, "ideaDao", void 0);
__decorate([
    Inject()
], IdeaApi.prototype, "requestManager", void 0);
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
], IdeaApi.prototype, "saveIdea", null);
IdeaApi = __decorate([
    Injected()
], IdeaApi);
export { IdeaApi };
//# sourceMappingURL=IdeaApi.js.map