import { app } from '@votecube/dependency-injection'
import { IIdeaConverter } from './converter/IdeaConverter'
import { ILogicUtils } from './LogicUtils'
import { IDetailedCubeLogic } from './pages/components/idea/DetailedCubeLogic'
import { IFactorRankingLogic } from './pages/idea/info/FactorRankingLogic'
import { IIdeaFormLogic } from './pages/idea/info/IdeaFormLogic'
import { IIdeaMainLogic } from './pages/idea/info/IdeaMainLogic'
import { IIdeaFormManager } from './pages/idea/IdeaFormManager'
import { ICubeLogic } from './idea/CubeLogic'
import { IIdeaManager } from './idea/IdeaManager'
import { IAgreementManager } from './idea/AgreementManager'
import { IAgreementConverter } from './converter/AgreementConverter'

const publicLogic = app('vc-logic')

export const CUBE_LOGIC = publicLogic.token<ICubeLogic>('CUBE_LOGIC')
export const DETAILED_CUBE_LOGIC = publicLogic.token<IDetailedCubeLogic>('DETAILED_CUBE_LOGIC')
export const FACTOR_RANKING_LOGIC = publicLogic.token<IFactorRankingLogic>('FACTOR_RANKING_LOGIC')
export const LOGIC_UTILS = publicLogic.token<ILogicUtils>('LOGIC_UTILS')
export const IDEA_FORM_LOGIC = publicLogic.token<IIdeaFormLogic>('IDEA_FORM_LOGIC')
export const IDEA_FORM_MANAGER = publicLogic.token<IIdeaFormManager>('IDEA_FORM_MANAGER')
export const IDEA_MAIN_LOGIC = publicLogic.token<IIdeaMainLogic>('IDEA_MAIN_LOGIC')
export const IDEA_MANAGER = publicLogic.token<IIdeaManager>('IDEA_MANAGER')
export const IDEA_CONVERTER = publicLogic.token<IIdeaConverter>('IDEA_CONVERTER')
export const AGREEMENT_MANAGER = publicLogic.token<IAgreementManager>('AGREEMENT_MANAGER')
export const AGREEMENT_CONVERTER = publicLogic.token<IAgreementConverter>('AGREEMENT_CONVERTER')
