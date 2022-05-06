import { APPLICATION_STORE, IApplicationLoader } from '@airport/apron'
import { API_REGISTRY } from '@airport/check-in'
import { DEPENDENCY_INJECTION } from '@airport/direction-indicator'
import { APPLICATION_INITIALIZER } from '@airport/terminal-map'
import { ApplicationLoader } from './ApplicationLoader'
import { votecube } from './common-tokens'

import { IIdeaDao, IdeaDao, IIdeaSituationDao, IdeaSituationDao } from "../dao/dao";
import { AGREEMENT_API, IDEA_API, IDEA_SITUATION_API } from './common-tokens'
import { AgreementApi, IdeaApi, IdeaSituationApi } from '../api/api'

export const IDEA_DAO = votecube.token<IIdeaDao>({
    class: IdeaDao,
    interface: 'IIdeaDao',
    token: 'IDEA_DAO'
})
export const IDEA_SITUATION_DAO = votecube.token<IIdeaSituationDao>({
    class: IdeaSituationDao,
    interface: 'IIdeaSituationDao',
    token: 'IDEA_SITUATION_DAO'
})

DEPENDENCY_INJECTION.set(IDEA_API, IdeaApi)
IDEA_API.setDependencies({
    ideaDao: IDEA_DAO
})
DEPENDENCY_INJECTION.set(IDEA_SITUATION_API, IdeaSituationApi)
IDEA_SITUATION_API.setDependencies({
    ideaSituationeDao: IDEA_SITUATION_DAO
})
DEPENDENCY_INJECTION.set(AGREEMENT_API, AgreementApi)

export const APPLICATION_LOADER = votecube.token<IApplicationLoader>({
    class: ApplicationLoader,
    interface: 'IApplicationLoader',
    token: 'APPLICATION_LOADER'
})

APPLICATION_LOADER.setDependencies({
    applicationInitializer: APPLICATION_INITIALIZER,
    applicationStore: APPLICATION_STORE,
    apiRegistry: API_REGISTRY
})
