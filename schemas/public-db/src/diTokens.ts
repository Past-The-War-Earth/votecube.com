import {diToken}                from '@airport/di'
import {IPollDao}               from './dao/poll/PollDao'
import {IVoteDao}               from './dao/vote/VoteDao'
import {IPollFactorPositionDmo} from './dmo/poll/PollFactorPositionDmo'

export const POLL_DAO                 = diToken<IPollDao>()
export const POLL_FACTOR_POSITION_DMO = diToken<IPollFactorPositionDmo>()
export const VOTE_DAO                 = diToken<IVoteDao>()
