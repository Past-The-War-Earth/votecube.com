import { app } from '@votecube/dependency-injection';
export const votecube = app('votecube');
export const SITUATION_API = votecube.token('ISituationApi');
export const SOLUTION_API = votecube.token('ISolutionApi');
//# sourceMappingURL=tokens.js.map