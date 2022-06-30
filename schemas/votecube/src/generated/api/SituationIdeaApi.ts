import {
	SITUATION_IDEA_API,
} from '../../to_be_generated/common-tokens';
import {
	DEPENDENCY_INJECTION,
	Inject,
	Injected,
} from '@airport/direction-indicator';
import {
	IRequestManager,
} from '@airport/arrivals-n-departures';
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
	ISituationIdeaDao,
} from '../../dao/dao';
import {
	ReasonDao,
} from '../../dao/ReasonDao';
import {
	SituationIdea,
} from '../../ddl/ddl';



// An API stub for other Applications and UIs to use
@Injected()
export class SituationIdeaApi {

    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, SITUATION_IDEA_API)
    }
        
    @Inject()
    situationIdeaApi: SituationIdeaApi
            
    async  add(
        situationIdea: SituationIdea
    ): Promise<void> {
        await this.situationIdeaApi.add(situationIdea)
    }

}
