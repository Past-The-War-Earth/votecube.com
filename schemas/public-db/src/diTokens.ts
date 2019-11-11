import {diToken}         from '@airport/di'
import {IDbConverter}    from './dao/DbConverter'
import {IDbUtils}        from './dao/DbUtils'
import {IFactorDao}      from './dao/factor/FactorDao'
import {IPollDao}        from './dao/poll/PollDao'
import {ILabelDao}       from './dao/poll/variation/label/LabelDao'
import {IUserDao}        from './dao/UserDao'
import {IVoteDao}        from './dao/vote/VoteDao'
import {IVotecubeSchema} from './document/schema/Schema'

export const DB_CONVERTER = diToken<IDbConverter>()
export const DB_UTILS     = diToken<IDbUtils>()
export const FACTOR_DAO   = diToken<IFactorDao>()
export const LABEL_DAO    = diToken<ILabelDao>()
export const POLL_DAO     = diToken<IPollDao>()
export const SCHEMA       = diToken<IVotecubeSchema>()
export const USER_DAO     = diToken<IUserDao>()
export const VOTE_DAO     = diToken<IVoteDao>()
