import { app } from '@votecube/dependency-injection';
const publicLogic = app('vc-logic');
export const CUBE_LOGIC = publicLogic.token('CUBE_LOGIC');
export const DETAILED_CUBE_LOGIC = publicLogic.token('DETAILED_CUBE_LOGIC');
export const FACTOR_RANKING_LOGIC = publicLogic.token('FACTOR_RANKING_LOGIC');
export const LOGIC_UTILS = publicLogic.token('LOGIC_UTILS');
export const IDEA_FORM_LOGIC = publicLogic.token('IDEA_FORM_LOGIC');
export const IDEA_FORM_MANAGER = publicLogic.token('IDEA_FORM_MANAGER');
export const IDEA_MAIN_LOGIC = publicLogic.token('IDEA_MAIN_LOGIC');
export const IDEA_MANAGER = publicLogic.token('IDEA_MANAGER');
export const IDEA_CONVERTER = publicLogic.token('IDEA_CONVERTER');
export const AGREEMENT_MANAGER = publicLogic.token('AGREEMENT_MANAGER');
export const AGREEMENT_CONVERTER = publicLogic.token('AGREEMENT_CONVERTER');
//# sourceMappingURL=tokens.js.map