import {
	IDEA_SITUATION_API,
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


export interface IIdeaSituationApi {
    add(ideaSituation: ISituationIdea): Promise<void>;
}

// An API stub for other Applications and UIs to use
@Injected()
export class IdeaSituationApi {

    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, IDEA_SITUATION_API)
    }
        
    @Inject()
    ideaSituationApi: IdeaSituationApi
            
    async  add(
        situationIdea: ISituationIdea
    ): Promise<void> {
        await this.ideaSituationApi.add(situationIdea)
    }

}
