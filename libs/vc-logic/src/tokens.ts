import { system } from '@airport/di'
import { IAuth } from './Auth'
import { ISituationConverter } from './converter/SituationConverter'
import { ILogicUtils } from './LogicUtils'
import { IDetailedCubeLogic } from './pages/components/situation/DetailedCubeLogic'
import { IFactorRankingLogic } from './pages/situation/info/FactorRankingLogic'
import { ISituationFormLogic } from './pages/situation/info/SituationFormLogic'
import { ISituationMainLogic } from './pages/situation/info/SituationMainLogic'
import { ISituationFormManager } from './pages/situation/SituationFormManager'
import { ICubeLogic } from './situation/CubeLogic'
import { ISituationManager } from './situation/SituationManager'
import { ISolutionManager } from './situation/SolutionManager'
import { IRoutes } from './Routes'
import { ISolutionConverter } from './converter/SolutionConverter'

const publicLogic = system('votecube-ui')
	.lib('vc-logic')

export const AUTH = publicLogic.token<IAuth>('IAuth')
export const CUBE_LOGIC = publicLogic.token<ICubeLogic>('ICubeLogic')
export const DETAILED_CUBE_LOGIC = publicLogic.token<IDetailedCubeLogic>('IDetailedCubeLogic')
export const FACTOR_RANKING_LOGIC = publicLogic.token<IFactorRankingLogic>('IFactorRankingLogic')
export const LOGIC_UTILS = publicLogic.token<ILogicUtils>('ILogicUtils')
export const ROUTES = publicLogic.token<IRoutes>('IRoutes')
export const SITUATION_FORM_LOGIC = publicLogic.token<ISituationFormLogic>('ISituationFormLogic')
export const SITUATION_FORM_MANAGER = publicLogic.token<ISituationFormManager>('ISituationFormManager')
export const SITUATION_MAIN_LOGIC = publicLogic.token<ISituationMainLogic>('ISituationMainLogic')
export const SITUATION_MANAGER = publicLogic.token<ISituationManager>('ISituationManager')
export const SITUATION_CONVERTER = publicLogic.token<ISituationConverter>('ISituationConverter')
export const SOLUTION_MANAGER = publicLogic.token<ISolutionManager>('ISolutionManager')
export const SOLUTION_CONVERTER = publicLogic.token<ISolutionConverter>('ISolutionConverter')
