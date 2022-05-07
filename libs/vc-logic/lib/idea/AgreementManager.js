var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AgreementApiClient } from '@votecube/votecube-client';
import { Inject, Injected } from '@airport/direction-indicator';
let AgreementManager = class AgreementManager {
    constructor() {
        this.agreementApi = new AgreementApiClient();
    }
    async getAgreementForIdea(
    // User-information is in AIRport
    ideaRepositoryUuid) {
        if (!ideaRepositoryUuid || ideaRepositoryUuid === ':repositoryUuId') {
            return this.getStubAgreement();
        }
        let agreement = await this.agreementApi
            .getMyAgreementForIdea(ideaRepositoryUuid);
        if (!agreement) {
            return this.getStubAgreement();
        }
        return this.agreementConverter.dbToUi(agreement);
    }
    async saveAgreement(idea, agreement) {
        const dbAgreement = this.agreementConverter.uiToDb(agreement, idea.ageSuitability, this.ideaManager.cachedIdea.db);
        await this.agreementApi.saveAgreement(dbAgreement);
    }
    async saveCachedIdeaAgreement(agreement) {
        await this.saveAgreement(this.ideaManager.cachedIdea.ui, agreement);
    }
    getStubAgreement() {
        return Object.assign(Object.assign({}, this.getStubIds()), { 1: Object.assign(Object.assign({}, this.getStubIds()), { factorNumber: 1, outcome: 'A', value: 33 }), 2: Object.assign(Object.assign({}, this.getStubIds()), { factorNumber: 2, outcome: 'A', value: 33 }), 3: Object.assign(Object.assign({}, this.getStubIds()), { factorNumber: 3, outcome: 'B', value: 34 }) });
    }
    getStubIds() {
        return {
            // actorId: null,
            // actorUuId: null,
            // actorRecordId: null,
            ageSuitability: null,
            // repositoryId: null,
            // repositoryUuId: null,
        };
    }
};
__decorate([
    Inject()
], AgreementManager.prototype, "agreementConverter", void 0);
__decorate([
    Inject()
], AgreementManager.prototype, "ideaManager", void 0);
AgreementManager = __decorate([
    Injected()
], AgreementManager);
export { AgreementManager };
//# sourceMappingURL=AgreementManager.js.map