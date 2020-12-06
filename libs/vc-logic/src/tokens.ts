import {system}                    from '@airport/di'
import {IAuth}                     from './Auth'
import {IConnectionManager}        from './ConnectionManager'
import {IPollRevisionConverter}    from './converter/PollRevisionConveter'
import {ILogicUtils}               from './LogicUtils'
import {IDetailedCubeLogic}        from './pages/components/poll/DetailedCubeLogic'
import {IFactorRankingLogic}       from './pages/poll/info/FactorRankingLogic'
import {IPollFormLogic}            from './pages/poll/info/PollFormLogic'
import {IPollMainLogic}            from './pages/poll/info/PollMainLogic'
import {IPollFormManager}          from './pages/poll/PollFormManager'
import {ICubeLogic}                from './poll/CubeLogic'
import {IPollManager}              from './poll/PollManager'
import {IVoteManager}              from './poll/VoteManager'
import {IRoutes}                   from './Routes'
import {IEntityStateManager}       from './serialize/EntityStateManager'
import {IOperationSerializer}      from './serialize/OperationSerializer'
import {IQueryResultsDeserializer} from './serialize/QueryResultsDeserializer'

const publicLogic = system('votecube-ui')
	.lib('vc-logic')

export const AUTH                       = publicLogic.token<IAuth>('IAuth')
export const CONNECTION_MANAGER         = publicLogic.token<IConnectionManager>('IConnectionManager')
export const CUBE_LOGIC                 = publicLogic.token<ICubeLogic>('ICubeLogic')
export const DETAILED_CUBE_LOGIC        = publicLogic.token<IDetailedCubeLogic>('IDetailedCubeLogic')
export const ENTITY_STATE_MANAGER       = publicLogic.token<IEntityStateManager>('IEntityStateManager')
export const FACTOR_RANKING_LOGIC       = publicLogic.token<IFactorRankingLogic>('IFactorRankingLogic')
export const LOGIC_UTILS                = publicLogic.token<ILogicUtils>('ILogicUtils')
export const OPERATION_SERIALIZER       = publicLogic.token<IOperationSerializer>('IOperationSerializer')
export const POLL_FORM_LOGIC            = publicLogic.token<IPollFormLogic>('IPollFormLogic')
export const POLL_FORM_MANAGER          = publicLogic.token<IPollFormManager>('IPollFormManager')
export const POLL_MAIN_LOGIC            = publicLogic.token<IPollMainLogic>('IPollMainLogic')
export const POLL_MANAGER               = publicLogic.token<IPollManager>('IPollManager')
export const POLL_REVISION_CONVERTER    = publicLogic.token<IPollRevisionConverter>('IPollRevisionConverter')
export const QUERY_RESULTS_DESERIALIZER = publicLogic.token<IQueryResultsDeserializer>('IQueryResultsDeserializer')
export const ROUTES                     = publicLogic.token<IRoutes>('IRoutes')
export const VOTE_MANAGER               = publicLogic.token<IVoteManager>('IVoteManager')
