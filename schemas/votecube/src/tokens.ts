import { app } from '@votecube/dependency-injection'
import { IIdeaApi } from "./api/IdeaApi";
import { IAgreementApi } from "./api/AgreementApi";

export const votecube = app('votecube')

export const IDEA_API = votecube.token<IIdeaApi>('IIdeaApi')
export const AGREEMENT_API = votecube.token<IAgreementApi>('IAgreementApi')
