import {
	SITUATION_IDEA_API,
} from '../../to_be_generated/common-tokens';
import {
	DEPENDENCY_INJECTION,
	Inject,
	Injected,
} from '@airport/direction-indicator';
import {
	RequestManager,
} from '@airport/arrivals-n-departures';
import {
	Api,
} from '@airport/check-in';
import {
	SituationApi,
} from '@sapoto/core';
import {
	ISituationIdeaDao,
} from '../../dao/dao';
import {
	SituationIdea,
} from '../../ddl/ddl';
import {
	IdeaApi,
} from './IdeaApi';



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
