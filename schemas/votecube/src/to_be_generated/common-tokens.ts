import { app } from '@votecube/dependency-injection'
import type { IIdeaApi } from "../api/IdeaApi";
import type { IIdeaSituationApi } from '../api/SituationIdeaApi';
import type { IAgreementApi } from '../api/AgreementApi';

export const votecube = app('votecube')

export const IDEA_API = votecube.token<IIdeaApi>({
    class: null,
    interface: 'IIdeaApi',
    token: 'IDEA_API'
})
export const IDEA_SITUATION_API = votecube.token<IIdeaSituationApi>({
    class: null,
    interface: 'IIdeaSituationApi',
    token: 'IDEA_SITUATION_API'
})
export const AGREEMENT_API = votecube.token<IAgreementApi>({
    class: null,
    interface: 'IAgreementApi',
    token: 'AGREEMENT_API'
})