import { system } from '@airport/di'
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
import { ISolutionConverter } from './converter/SolutionConverter'

const publicLogic = system('votecube-ui').lib('vc-logic')

export const CUBE_LOGIC = publicLogic.token<ICubeLogic>('CUBE_LOGIC')
export const DETAILED_CUBE_LOGIC = publicLogic.token<IDetailedCubeLogic>('DETAILED_CUBE_LOGIC')
export const FACTOR_RANKING_LOGIC = publicLogic.token<IFactorRankingLogic>('FACTOR_RANKING_LOGIC')
export const LOGIC_UTILS = publicLogic.token<ILogicUtils>('LOGIC_UTILS')
export const SITUATION_FORM_LOGIC = publicLogic.token<ISituationFormLogic>('SITUATION_FORM_LOGIC')
export const SITUATION_FORM_MANAGER = publicLogic.token<ISituationFormManager>('SITUATION_FORM_MANAGER')
export const SITUATION_MAIN_LOGIC = publicLogic.token<ISituationMainLogic>('SITUATION_MAIN_LOGIC')
export const SITUATION_MANAGER = publicLogic.token<ISituationManager>('SITUATION_MANAGER')
export const SITUATION_CONVERTER = publicLogic.token<ISituationConverter>('SITUATION_CONVERTER')
export const SOLUTION_MANAGER = publicLogic.token<ISolutionManager>('SOLUTION_MANAGER')
export const SOLUTION_CONVERTER = publicLogic.token<ISolutionConverter>('SOLUTION_CONVERTER')
