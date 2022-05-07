import { app } from '@votecube/dependency-injection'
import { REPOSITORY_RECORD_CONVERTER } from '@votecube/ui-logic'
import { IdeaConverter, IIdeaConverter } from './converter/IdeaConverter'
import { ILogicUtils, LogicUtils } from './LogicUtils'
import { DetailedCubeLogic, IDetailedCubeLogic } from './pages/components/idea/DetailedCubeLogic'
import { FactorRankingLogic, IFactorRankingLogic } from './pages/idea/info/FactorRankingLogic'
import { IdeaFormLogic, IIdeaFormLogic } from './pages/idea/info/IdeaFormLogic'
import { IdeaMainLogic, IIdeaMainLogic } from './pages/idea/info/IdeaMainLogic'
import { IdeaFormManager, IIdeaFormManager } from './pages/idea/IdeaFormManager'
import { CubeLogic, ICubeLogic } from './idea/CubeLogic'
import { IdeaManager, IIdeaManager } from './idea/IdeaManager'
import { AgreementManager, IAgreementManager } from './idea/AgreementManager'
import { AgreementConverter, IAgreementConverter } from './converter/AgreementConverter'

const publicLogic = app('vc-logic')

export const AGREEMENT_CONVERTER = publicLogic.token<IAgreementConverter>({
    class: AgreementConverter,
    interface: 'IAgreementConverter',
    token: 'AGREEMENT_CONVERTER'
})
export const AGREEMENT_MANAGER = publicLogic.token<IAgreementManager>({
    class: AgreementManager,
    interface: 'IAgreementManager',
    token: 'AGREEMENT_MANAGER'
})
export const CUBE_LOGIC = publicLogic.token<ICubeLogic>({
    class: CubeLogic,
    interface: 'ICubeLogic',
    token: 'CUBE_LOGIC'
})
export const DETAILED_CUBE_LOGIC = publicLogic.token<IDetailedCubeLogic>({
    class: DetailedCubeLogic,
    interface: 'IDetailedCubeLogic',
    token: 'DETAILED_CUBE_LOGIC'
})
export const FACTOR_RANKING_LOGIC = publicLogic.token<IFactorRankingLogic>({
    class: FactorRankingLogic,
    interface: 'IFactorRankingLogic',
    token: 'FACTOR_RANKING_LOGIC'
})
export const IDEA_CONVERTER = publicLogic.token<IIdeaConverter>({
    class: IdeaConverter,
    interface: 'IIdeaConverter',
    token: 'IDEA_CONVERTER'
})
export const IDEA_FORM_LOGIC = publicLogic.token<IIdeaFormLogic>({
    class: IdeaFormLogic,
    interface: 'IIdeaFormLogic',
    token: 'IDEA_FORM_LOGIC'
})
export const IDEA_FORM_MANAGER = publicLogic.token<IIdeaFormManager>({
    class: IdeaFormManager,
    interface: 'IIdeaFormManager',
    token: 'IDEA_FORM_MANAGER'
})
export const IDEA_MAIN_LOGIC = publicLogic.token<IIdeaMainLogic>({
    class: IdeaMainLogic,
    interface: 'IIdeaMainLogic',
    token: 'IDEA_MAIN_LOGIC'
})
export const IDEA_MANAGER = publicLogic.token<IIdeaManager>({
    class: IdeaManager,
    interface: 'IIdeaManager',
    token: 'IDEA_MANAGER'
})
export const LOGIC_UTILS = publicLogic.token<ILogicUtils>({
    class: LogicUtils,
    interface: 'ILogicUtils',
    token: 'LOGIC_UTILS'
})
AGREEMENT_CONVERTER.setDependencies({
    repositoryRecordConverter: REPOSITORY_RECORD_CONVERTER
})
AGREEMENT_MANAGER.setDependencies({
    agreementConverter: AGREEMENT_CONVERTER,
    ideaManager: IDEA_MANAGER
})
DETAILED_CUBE_LOGIC.setDependencies({
    cubeLogic: CUBE_LOGIC,
    logicUtils: LOGIC_UTILS
})
IDEA_CONVERTER.setDependencies({
    ideaFormManager: IDEA_FORM_MANAGER
})
IDEA_FORM_LOGIC.setDependencies({
    ideaFormManager: IDEA_FORM_MANAGER
})
IDEA_MAIN_LOGIC.setDependencies({
    ideaFormManager: IDEA_FORM_MANAGER
})
IDEA_MANAGER.setDependencies({
    cubeLogic: CUBE_LOGIC,
    logicUtils: LOGIC_UTILS,
    ideaFormManager: IDEA_FORM_MANAGER,
    ideaConverter: IDEA_CONVERTER
})