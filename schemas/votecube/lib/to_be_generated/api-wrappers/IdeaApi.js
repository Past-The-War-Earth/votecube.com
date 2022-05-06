var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Inject, Injected } from "@airport/direction-indicator";
import { IDEA_API } from "../common-tokens";
let IdeaApi = class IdeaApi {
    async getIdeasForLabels(labels) {
        return await this.interAppApiClient.invokeApiMethod(IDEA_API, 'getIdeasForLabels', [labels]);
    }
    async getLeafIdeas(idea) {
        return await this.interAppApiClient.invokeApiMethod(IDEA_API, 'getLeafIdeas', [idea]);
    }
    async getStemIdea(idea) {
        return await this.interAppApiClient.invokeApiMethod(IDEA_API, 'getStemIdea', [idea]);
    }
    async getIdea(repositorySource, ideaRepositoryUuId) {
        return await this.interAppApiClient.invokeApiMethod(IDEA_API, 'getIdea', [repositorySource, ideaRepositoryUuId]);
    }
    async saveExistingIdea(idea) {
        return await this.interAppApiClient.invokeApiMethod(IDEA_API, 'saveExistingIdea', [idea]);
    }
    async saveNewIdea(idea) {
        return await this.interAppApiClient.invokeApiMethod(IDEA_API, 'saveNewIdea', [idea]);
    }
};
__decorate([
    Inject()
], IdeaApi.prototype, "interAppApiClient", void 0);
IdeaApi = __decorate([
    Injected()
], IdeaApi);
export { IdeaApi };
//# sourceMappingURL=IdeaApi.js.map