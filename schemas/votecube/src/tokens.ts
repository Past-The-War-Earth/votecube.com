import { app } from '@votecube/dependency-injection'
import { IIdeaApi } from "./api/IdeaApi";
import { IAgreementApi } from "./api/AgreementApi";
import { IIdeaSituationApi } from './api/IdeaSituationApi';

export const votecube = app('votecube')

export const IDEA_API = votecube.token<IIdeaApi>('IDEA_API')
export const IDEA_SITUATION_API = votecube.token<IIdeaSituationApi>('IDEA_SITUATION_API')
export const AGREEMENT_API = votecube.token<IAgreementApi>('AGREEMENT_API')
