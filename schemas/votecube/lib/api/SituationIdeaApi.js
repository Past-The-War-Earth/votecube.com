var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
let SituationIdeaApi = class SituationIdeaApi {
    async add(situationIdea) {
        if (situationIdea.id) {
            throw new Error(`New SituationIdea cannot have an Id defined`);
        }
        const situation = await this.situationApi.findById(situationIdea.situation);
        if (!situation) {
            throw new Error(`No situation "${situation.id}" found.`);
        }
        situationIdea.situation = situation;
        if (!situationIdea.idea.id) {
        }
        await this.situationIdeaDao.save(situationIdea);
    }
};
__decorate([
    Inject()
], SituationIdeaApi.prototype, "ideaApi", void 0);
__decorate([
    Inject()
], SituationIdeaApi.prototype, "requestManager", void 0);
__decorate([
    Inject()
], SituationIdeaApi.prototype, "situationApi", void 0);
__decorate([
    Inject()
], SituationIdeaApi.prototype, "situationIdeaDao", void 0);
__decorate([
    Api()
], SituationIdeaApi.prototype, "add", null);
SituationIdeaApi = __decorate([
    Injected()
], SituationIdeaApi);
export { SituationIdeaApi };
//# sourceMappingURL=SituationIdeaApi.js.map