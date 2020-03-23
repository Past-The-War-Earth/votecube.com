import { system } from '@airport/di';
const publicLogic = system('votecube-ui').lib('public-logic');
export const AUTH = publicLogic.token();
export const CUBE_LOGIC = publicLogic.token();
export const DETAILED_CUBE_LOGIC = publicLogic.token();
export const FACTOR_RANKING_LOGIC = publicLogic.token();
export const LOGIC_UTILS = publicLogic.token();
export const POLL_FORM_LOGIC = publicLogic.token();
export const POLL_FORM_MANAGER = publicLogic.token();
export const POLL_MAIN_LOGIC = publicLogic.token();
export const POLL_MANAGER = publicLogic.token();
export const POLL_REVISION_CONVERTER = publicLogic.token();
export const ROUTES = publicLogic.token();
//# sourceMappingURL=tokens.js.map