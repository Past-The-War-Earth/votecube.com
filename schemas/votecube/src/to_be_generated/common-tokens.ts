import { app } from '@votecube/dependency-injection'
import type { IIdeaApi } from "../api/IdeaApi";
import type { ISituationIdeaApi } from '../api/SituationIdeaApi';
import type { IAgreementApi } from '../api/AgreementApi';

export const votecube = app('votecube')

export const IDEA_API = votecube.token<IIdeaApi>({
    class: null,
    interface: 'IIdeaApi',
    token: 'IDEA_API'
})
export const SITUATION_IDEA_API = votecube.token<ISituationIdeaApi>({
    class: null,
    interface: 'IIdeaSituationApi',
    token: 'SITUATION_IDEA_API'
})
export const AGREEMENT_API = votecube.token<IAgreementApi>({
    class: null,
    interface: 'IAgreementApi',
    token: 'AGREEMENT_API'
})