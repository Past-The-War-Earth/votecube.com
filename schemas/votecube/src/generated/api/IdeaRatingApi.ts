import {
	IDEA_RATING_API,
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
	ITotalDelta,
} from '@sapoto/core';
import {
	IIdeaDao,
} from '../../dao/IdeaDao';
import {
	IIdeaRatingDao,
} from '../../dao/IdeaRatingDao';
import {
	ISituationIdeaDao,
} from '../../dao/SituationIdeaDao';
import {
	Idea,
	IdeaRating,
	SituationIdea,
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
        inIdeaRating: IdeaRating
    ): Promise<void> {
        await this.ideaRatingApi.setIdeaRating(inIdeaRating)
    }

}
