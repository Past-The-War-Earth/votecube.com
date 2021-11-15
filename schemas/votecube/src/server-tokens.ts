import { system } from "@airport/di";
import { ISituationApi } from "./api/SituationApi";
import { ISolutionApi } from "./api/SolutionApi";
import { ISituationDao } from "./dao/SituationDao";

const votecube = system('votecube').lib('votecube')

export const SITUATION_DAO = votecube.token<ISituationDao>('ISituationDao')
