import { system } from '@airport/di';
const publicLogic = system('votecube-ui')
    .lib('vc-logic');
export const AUTH = publicLogic.token('IAuth');
export const CUBE_LOGIC = publicLogic.token('ICubeLogic');
export const DETAILED_CUBE_LOGIC = publicLogic.token('IDetailedCubeLogic');
export const FACTOR_RANKING_LOGIC = publicLogic.token('IFactorRankingLogic');
export const LOGIC_UTILS = publicLogic.token('ILogicUtils');
export const ROUTES = publicLogic.token('IRoutes');
export const SITUATION_FORM_LOGIC = publicLogic.token('ISituationFormLogic');
export const SITUATION_FORM_MANAGER = publicLogic.token('ISituationFormManager');
export const SITUATION_MAIN_LOGIC = publicLogic.token('ISituationMainLogic');
export const SITUATION_MANAGER = publicLogic.token('ISituationManager');
export const SITUATION_CONVERTER = publicLogic.token('ISituationConverter');
export const SOLUTION_MANAGER = publicLogic.token('ISolutionManager');
export const SOLUTION_CONVERTER = publicLogic.token('ISolutionConverter');
export const REPOSITORY_RECORD_CONVERTER = publicLogic.token('IRepositoryRecordConverter');
//# sourceMappingURL=tokens.js.map