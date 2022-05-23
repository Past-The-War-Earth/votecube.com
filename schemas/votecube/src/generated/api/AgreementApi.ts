import {
	Inject,
	Injected,
} from '@airport/direction-indicator';
import {
	Api,
} from '@airport/check-in';
import {
	IAgreement,
} from '../../generated/interfaces';


// An API stub for other Applications and UIs to use
@Injected()
export class AgreementApi {

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
