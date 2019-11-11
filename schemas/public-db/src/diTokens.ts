import {diToken}      from '@airport/di'
import {IDbUtils}     from './dao/DbUtils'
import {IDbConverter} from './dao/DbConverter'
import {IFactorDao}   from './dao/factor/FactorDao'
import {IPollDao}     from './dao/poll/PollDao'
import {ILabelDao}    from './dao/poll/variation/label/LabelDao'
import {IVoteDao}     from './dao/vote/VoteDao'

export const DB_CONVERTER = diToken<IDbConverter>()
export const DB_UTILS     = diToken<IDbUtils>()
export const FACTOR_DAO   = diToken<IFactorDao>()
export const LABEL_DAO    = diToken<ILabelDao>()
export const POLL_DAO     = diToken<IPollDao>()
export const VOTE_DAO     = diToken<IVoteDao>()
