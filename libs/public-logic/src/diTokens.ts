import {diToken}             from '@airport/di'
import {IAuth}               from './Auth'
import {ILogicUtils}         from './LogicUtils'
import {IFactorRankingLogic} from './pages/poll/info/FactorRankingLogic'
import {IPollFormLogic}      from './pages/poll/info/PollFormLogic'
import {IPollMainLogic}      from './pages/poll/info/PollMainLogic'
import {IPollFormManager}    from './pages/poll/PollFormManager'
import {ICubeLogic}          from './poll/CubeLogic'
import {IPollLogic}          from './poll/PollLogic'
import {IPollManager}        from './poll/PollManager'

export const AUTH                 = diToken<IAuth>()
export const CUBE_LOGIC           = diToken<ICubeLogic>()
export const FACTOR_RANKING_LOGIC = diToken<IFactorRankingLogic>()
export const LOGIC_UTILS          = diToken<ILogicUtils>()
export const POLL_FORM_LOGIC      = diToken<IPollFormLogic>()
export const POLL_FORM_MANAGER    = diToken<IPollFormManager>()
export const POLL_LOGIC           = diToken<IPollLogic>()
export const POLL_MAIN_LOGIC      = diToken<IPollMainLogic>()
export const POLL_MANAGER         = diToken<IPollManager>()
