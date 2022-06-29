import {
	IDEA_RATING_API,
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
	IdeaRating,
} from '../../ddl/ddl';



// An API stub for other Applications and UIs to use
@Injected()
export class IdeaRatingApi {

    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, IDEA_RATING_API)
    }
        
    @Inject()
    ideaRatingApi: IdeaRatingApi
            
    async  setIdeaRating(
        ideaRating: IdeaRating
    ): Promise<void> {
        await this.ideaRatingApi.setIdeaRating(ideaRating)
    }

}
