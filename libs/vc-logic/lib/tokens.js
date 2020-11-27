import { system } from '@airport/di';
const publicLogic = system('votecube-ui')
    .lib('vc-logic');
export const AUTH = publicLogic.token('IAuth');
export const CUBE_LOGIC = publicLogic.token('ICubeLogic');
export const DETAILED_CUBE_LOGIC = publicLogic.token('IDetailedCubeLogic');
export const FACTOR_RANKING_LOGIC = publicLogic.token('IFactorRankingLogic');
export const LOGIC_UTILS = publicLogic.token('ILogicUtils');
export const POLL_FORM_LOGIC = publicLogic.token('IPollFormLogic');
export const POLL_FORM_MANAGER = publicLogic.token('IPollFormManager');
export const POLL_MAIN_LOGIC = publicLogic.token('IPollMainLogic');
export const CONNECTION_MANAGER = publicLogic.token('IConnectionManager');
export const POLL_MANAGER = publicLogic.token('IPollManager');
export const VOTE_MANAGER = publicLogic.token('IVoteManager');
export const POLL_REVISION_CONVERTER = publicLogic.token('IPollRevisionConverter');
export const ROUTES = publicLogic.token('IRoutes');
//# sourceMappingURL=tokens.js.map