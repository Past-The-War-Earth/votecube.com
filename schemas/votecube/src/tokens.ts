import { system } from "@airport/di";
import { ISituationApi } from "./api/SituationApi";
import { ISolutionApi } from "./api/SolutionApi";

export const votecube = system('votecube').lib('votecube')
votecube.signature = 'votecube'

export const SITUATION_API = votecube.token<ISituationApi>('SITUATION_API')
export const SOLUTION_API = votecube.token<ISolutionApi>('SOLUTION_API')
