import {diToken}                from '@airport/di'
import {IPollDao}               from './dao/poll/PollDao'
import {IVoteDao}               from './dao/vote/VoteDao'
import {IPollFactorPositionDuo} from './duo/poll/PollFactorPositionDuo'

export const POLL_DAO                 = diToken<IPollDao>()
export const POLL_FACTOR_POSITION_DUO = diToken<IPollFactorPositionDuo>()
export const VOTE_DAO                 = diToken<IVoteDao>()
