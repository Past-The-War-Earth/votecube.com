var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AGREEMENT_API, } from '../../to_be_generated/common-tokens';
import { DEPENDENCY_INJECTION, Inject, Injected, } from '@airport/direction-indicator';
// An API stub for other Applications and UIs to use
let AgreementApi = class AgreementApi {
    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, AGREEMENT_API);
    }
    async saveAgreement(agreement) {
        await this.agreementApi.saveAgreement(agreement);
    }
    async getMyAgreementForIdea(ideaRepositoryUuid) {
        return await this.agreementApi.getMyAgreementForIdea(ideaRepositoryUuid);
    }
};
__decorate([
    Inject()
], AgreementApi.prototype, "agreementApi", void 0);
AgreementApi = __decorate([
    Injected()
], AgreementApi);
export { AgreementApi };
//# sourceMappingURL=AgreementApi.js.map