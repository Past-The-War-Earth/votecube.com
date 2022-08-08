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
	and,
	between,
	byId,
	equals,
	exists,
	isNull,
	length,
	oneOfStrings,
	or,
	uniqueIn,
	value,
} from '@airbridge/validate';
import {
	ITotalDelta,
} from '@sapoto/core';
import {
	AgreementDao,
} from '../../dao/AgreementDao';
import {
	AgreementReasonDao,
} from '../../dao/AgreementReasonDao';
import {
	FactorDao,
} from '../../dao/FactorDao';
import {
	IIdeaDao,
} from '../../dao/IdeaDao';
import {
	PositionDao,
} from '../../dao/PositionDao';
import {
	ReasonDao,
} from '../../dao/reason/ReasonDao';
import {
	ISituationIdeaDao,
} from '../../dao/SituationIdeaDao';
import {
	Agreement,
} from '../../ddl/ddl';
import {
	AgreementDvo,
} from '../../dvo/AgreementDvo';
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
        agreement: Agreement
    ): Promise<void> {
        await this.agreementApi.setAgreement(agreement)
    }

}
