import {
	Inject,
	Injected,
} from '@airport/direction-indicator';
import {
	Api,
} from '@airport/check-in';
import {
	IIdeaSituationDao,
} from '../../dao/dao';
import {
	IIdeaSituation,
} from '../../generated/interfaces';


// An API stub for other Applications and UIs to use
@Injected()
export class IdeaSituationApi {

    @Inject()
    ideaSituationApi: IdeaSituationApi
    
    async  add(
        ideaSituation: IIdeaSituation
    ): Promise<void> {
        await this.ideaSituationApi.add(ideaSituation)
    }

}
