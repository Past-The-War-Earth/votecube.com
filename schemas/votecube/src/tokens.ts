import { app } from '@votecube/dependency-injection'
import { ISituationApi } from "./api/SituationApi";
import { ISolutionApi } from "./api/SolutionApi";

export const votecube = app('votecube')

export const SITUATION_API = votecube.token<ISituationApi>('ISituationApi')
export const SOLUTION_API = votecube.token<ISolutionApi>('ISolutionApi')
