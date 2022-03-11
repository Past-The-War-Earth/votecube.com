import { container, DI } from '@airport/di';
import { AgreementApiClient } from '@votecube/votecube';
import { IDEA_MANAGER, AGREEMENT_CONVERTER, AGREEMENT_MANAGER } from '../tokens';
export class AgreementManager {
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
        const agreementConverter = await container(this).get(AGREEMENT_CONVERTER);
        return agreementConverter.dbToUi(agreement);
    }
    async saveAgreement(idea, agreement) {
        const [ideaManager, agreementConverter] = await container(this)
            .get(IDEA_MANAGER, AGREEMENT_CONVERTER);
        const dbAgreement = agreementConverter.uiToDb(agreement, idea.ageSuitability, ideaManager.cachedIdea.db);
        await this.agreementApi.saveAgreement(dbAgreement);
    }
    async saveCachedIdeaAgreement(agreement) {
        const ideaManager = await container(this).get(IDEA_MANAGER);
        await this.saveAgreement(ideaManager.cachedIdea.ui, agreement);
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
}
DI.set(AGREEMENT_MANAGER, AgreementManager);
//# sourceMappingURL=AgreementManager.js.map