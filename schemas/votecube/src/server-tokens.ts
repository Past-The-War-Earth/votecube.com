import { ISituationDao } from "./dao/SituationDao";
import { votecube } from "./tokens";

export const SITUATION_DAO = votecube.token<ISituationDao>('SITUATION_DAO')
