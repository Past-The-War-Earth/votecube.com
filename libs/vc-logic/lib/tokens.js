import { app } from '@votecube/dependency-injection';
const publicLogic = app('vc-logic');
export const CUBE_LOGIC = publicLogic.token('CUBE_LOGIC');
export const DETAILED_CUBE_LOGIC = publicLogic.token('DETAILED_CUBE_LOGIC');
export const FACTOR_RANKING_LOGIC = publicLogic.token('FACTOR_RANKING_LOGIC');
export const LOGIC_UTILS = publicLogic.token('LOGIC_UTILS');
export const SITUATION_FORM_LOGIC = publicLogic.token('SITUATION_FORM_LOGIC');
export const SITUATION_FORM_MANAGER = publicLogic.token('SITUATION_FORM_MANAGER');
export const SITUATION_MAIN_LOGIC = publicLogic.token('SITUATION_MAIN_LOGIC');
export const SITUATION_MANAGER = publicLogic.token('SITUATION_MANAGER');
export const SITUATION_CONVERTER = publicLogic.token('SITUATION_CONVERTER');
export const SOLUTION_MANAGER = publicLogic.token('SOLUTION_MANAGER');
export const SOLUTION_CONVERTER = publicLogic.token('SOLUTION_CONVERTER');
//# sourceMappingURL=tokens.js.map