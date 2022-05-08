import { app } from '@votecube/dependency-injection'
import type { IAgreementApi } from './wrappers/AgreementApiClient'
import type { IIdeaApi } from './wrappers/IdeaApiClient'
import type { IIdeaSituationApi } from './wrappers/IdeaSituationApiClient'

export const votecube = app('votecube')
votecube.autopilot = true

export const AGREEMENT_API = votecube.token<IAgreementApi>({
    class: null,
    interface: 'IAgreementApi',
    token: 'AGREEMENT_API'
})
export const IDEA_API = votecube.token<IIdeaApi>({
    class: null,
    interface: 'IIdeaApi',
    token: 'IDEA_API'
})
export const IDEA_SITUATION_API = votecube.token<IIdeaSituationApi>({
    class: null,
    interface: 'ISituationApi',
    token: 'SITUATION_API'
})