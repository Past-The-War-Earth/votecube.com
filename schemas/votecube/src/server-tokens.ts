import { IIdeaDao } from "./dao/IdeaDao";
import { IIdeaSituationDao } from "./dao/IdeaSituationDao";
import { votecube } from "./tokens";

export const IDEA_DAO = votecube.token<IIdeaDao>('IDEA_DAO')
export const IDEA_SITUATION_DAO = votecube.token<IIdeaSituationDao>('IDEA_SITUATION_DAO')
