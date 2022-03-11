import { IIdeaDao } from "./dao/IdeaDao";
import { votecube } from "./tokens";

export const IDEA_DAO = votecube.token<IIdeaDao>('IDEA_DAO')
