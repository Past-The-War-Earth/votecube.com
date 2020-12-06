import { system } from '@airport/di';
const publicLogic = system('votecube-ui')
    .lib('vc-logic');
export const AUTH = publicLogic.token('IAuth');
export const CONNECTION_MANAGER = publicLogic.token('IConnectionManager');
export const CUBE_LOGIC = publicLogic.token('ICubeLogic');
export const DETAILED_CUBE_LOGIC = publicLogic.token('IDetailedCubeLogic');
export const ENTITY_STATE_MANAGER = publicLogic.token('IEntityStateManager');
export const FACTOR_RANKING_LOGIC = publicLogic.token('IFactorRankingLogic');
export const LOGIC_UTILS = publicLogic.token('ILogicUtils');
export const OPERATION_SERIALIZER = publicLogic.token('IOperationSerializer');
export const POLL_FORM_LOGIC = publicLogic.token('IPollFormLogic');
export const POLL_FORM_MANAGER = publicLogic.token('IPollFormManager');
export const POLL_MAIN_LOGIC = publicLogic.token('IPollMainLogic');
export const POLL_MANAGER = publicLogic.token('IPollManager');
export const POLL_REVISION_CONVERTER = publicLogic.token('IPollRevisionConverter');
export const QUERY_RESULTS_DESERIALIZER = publicLogic.token('IQueryResultsDeserializer');
export const ROUTES = publicLogic.token('IRoutes');
export const VOTE_MANAGER = publicLogic.token('IVoteManager');
//# sourceMappingURL=tokens.js.map