var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SITUATION_IDEA_API, } from '../../to_be_generated/common-tokens';
import { DEPENDENCY_INJECTION, Inject, Injected, } from '@airport/direction-indicator';
// An API stub for other Applications and UIs to use
let SituationIdeaApi = class SituationIdeaApi {
    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, SITUATION_IDEA_API);
    }
    async add(situationIdea) {
        await this.situationIdeaApi.add(situationIdea);
    }
    async setAgreement(agreement) {
        await this.situationIdeaApi.setAgreement(agreement);
    }
    async updateAgreementShare(situationIdeaUuId) {
        await this.situationIdeaApi.updateAgreementShare(situationIdeaUuId);
    }
};
__decorate([
    Inject()
], SituationIdeaApi.prototype, "situationIdeaApi", void 0);
SituationIdeaApi = __decorate([
    Injected()
], SituationIdeaApi);
export { SituationIdeaApi };
//# sourceMappingURL=SituationIdeaApi.js.map