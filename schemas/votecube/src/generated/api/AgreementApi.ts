import {
	AGREEMENT_API,
} from '../../to_be_generated/common-tokens';
import {
	DEPENDENCY_INJECTION,
	Inject,
	Injected,
} from '@airport/direction-indicator';
import {
	Api,
} from '@airport/check-in';
import {
	IAgreement,
} from '../../generated/interfaces';


export interface IAgreementApi {
    saveAgreement(agreement: IAgreement): Promise<void>;
    getMyAgreementForIdea(ideaRepositoryUuid: string): Promise<IAgreement>;
}

// An API stub for other Applications and UIs to use
@Injected()
export class AgreementApi {

    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, AGREEMENT_API)
    }
        
    @Inject()
    agreementApi: AgreementApi
            
    async  saveAgreement(
        agreement: IAgreement
    ): Promise<void> {
        await this.agreementApi.saveAgreement(agreement)
    }

    async  getMyAgreementForIdea(
        ideaRepositoryUuid: string
    ): Promise<IAgreement> {
        return await this.agreementApi.getMyAgreementForIdea(ideaRepositoryUuid)
    }

}
