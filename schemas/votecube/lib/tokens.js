import { app } from '@votecube/dependency-injection';
export const votecube = app('votecube');
export const IDEA_API = votecube.token('IDEA_API');
export const IDEA_SITUATION_API = votecube.token('IDEA_SITUATION_API');
export const AGREEMENT_API = votecube.token('AGREEMENT_API');
//# sourceMappingURL=tokens.js.map