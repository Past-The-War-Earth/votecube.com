import { app } from '@votecube/dependency-injection'
import type { IAgreementApi } from './wrappers/AgreementApiClient'
import type { IIdeaApi } from './wrappers/IdeaApiClient'
import type { IIdeaSituationApi } from './wrappers/IdeaSituationApiClient'

export const core = app('votecube')

export const AGREEMENT_API = core.token<IAgreementApi>({
    class: null,
    interface: 'IAgreementApi',
    token: 'AGREEMENT_API'
})
export const IDEA_API = core.token<IIdeaApi>({
    class: null,
    interface: 'IIdeaApi',
    token: 'IDEA_API'
})
export const IDEA_SITUATION_API = core.token<IIdeaSituationApi>({
    class: null,
    interface: 'ISituationApi',
    token: 'SITUATION_API'
})