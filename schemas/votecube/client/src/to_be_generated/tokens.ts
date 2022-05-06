import { domain } from '@airport/direction-indicator'
import type { IAgreementApi } from './wrappers/AgreementApiClient'
import type { IIdeaApi } from './wrappers/IdeaApiClient'
import type { IIdeaSituationApi } from './wrappers/IdeaSituationApiClient'

export const core = domain('localhost:8100').app('@sapoto/core')

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