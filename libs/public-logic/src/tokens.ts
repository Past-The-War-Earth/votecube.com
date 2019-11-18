import {system}              from '@airport/di'
import {IAuth}               from './Auth'
import {ILogicUtils}         from './LogicUtils'
import {IDetailedCubeLogic}  from './pages/components/poll/DetailedCubeLogic'
import {IFactorRankingLogic} from './pages/poll/info/FactorRankingLogic'
import {IPollFormLogic}      from './pages/poll/info/PollFormLogic'
import {IPollMainLogic}      from './pages/poll/info/PollMainLogic'
import {IPollFormManager}    from './pages/poll/PollFormManager'
import {ICubeLogic}          from './poll/CubeLogic'
import {IPollManager}        from './poll/PollManager'
import {IRoutes}             from './Routes'

const publicLogic = system('votecube-ui').lib('public-logic')

export const AUTH                 = publicLogic.token<IAuth>()
export const CUBE_LOGIC           = publicLogic.token<ICubeLogic>()
export const DETAILED_CUBE_LOGIC  = publicLogic.token<IDetailedCubeLogic>()
export const FACTOR_RANKING_LOGIC = publicLogic.token<IFactorRankingLogic>()
export const LOGIC_UTILS          = publicLogic.token<ILogicUtils>()
export const POLL_FORM_LOGIC      = publicLogic.token<IPollFormLogic>()
export const POLL_FORM_MANAGER    = publicLogic.token<IPollFormManager>()
export const POLL_MAIN_LOGIC      = publicLogic.token<IPollMainLogic>()
export const POLL_MANAGER         = publicLogic.token<IPollManager>()
export const ROUTES               = publicLogic.token<IRoutes>()
