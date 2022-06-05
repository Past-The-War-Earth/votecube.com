import {
	SITUATION_IDEA_API,
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
	ISituationIdeaDao,
} from '../../dao/dao';
import {
	ISituationIdea,
} from '../../generated/interfaces';


export interface ISituationIdeaApi {
    add(ideaSituation: ISituationIdea): Promise<void>;
}

// An API stub for other Applications and UIs to use
@Injected()
export class SituationIdeaApi {

    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, SITUATION_IDEA_API)
    }
        
    @Inject()
    situationIdeaApi: SituationIdeaApi
            
    async  add(
        situationIdea: ISituationIdea
    ): Promise<void> {
        await this.situationIdeaApi.add(situationIdea)
    }

}
