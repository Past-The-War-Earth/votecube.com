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
	AgreementDao,
} from '../../dao/AgreementDao';
import {
	AgreementReasonDao,
} from '../../dao/AgreementReasonDao';
import {
	IIdeaDao,
} from '../../dao/IdeaDao';
import {
	ReasonDao,
} from '../../dao/ReasonDao';
import {
	ISituationIdeaDao,
} from '../../dao/SituationIdeaDao';
import {
	ITotalDelta,
} from '../../ddl/TotalDelta';
import {
	Agreement,
	AgreementReason,
	Idea,
	Reason,
	SituationIdea,
} from '../../ddl/ddl';
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

    async  setAgreement(
        inAgreement: Agreement
    ): Promise<void> {
        await this.agreementApi.setAgreement(inAgreement)
    }

}
