import {system}                  from '@airport/di'
import {IPollVariationConverter} from '../../../libs/public-logic/src/converter/PollRevisionConveter'
import {IDbConverter}            from './dao/DbConverter'
import {IDbUtils}                from './dao/DbUtils'
import {IFactorDao}              from './dao/factor/FactorDao'
import {IPollDao}                from './dao/poll/PollDao'
import {ILabelDao}               from './dao/poll/variation/label/LabelDao'
import {IUserDao}                from './dao/UserDao'
import {IVoteDao}                from './dao/vote/VoteDao'
import {IVotecubeSchema}         from './document/schema/Schema'

const publicDb = system('votecube-ui').lib('public-db')

export const DB_CONVERTER       = publicDb.token<IDbConverter>()
export const DB_UTILS           = publicDb.token<IDbUtils>()
export const FACTOR_DAO         = publicDb.token<IFactorDao>()
export const LABEL_DAO          = publicDb.token<ILabelDao>()
export const POLL_DAO           = publicDb.token<IPollDao>()
export const POLL_VARIATION_DAO = publicDb.token<IPollVariationConverter>()
export const SCHEMA             = publicDb.token<IVotecubeSchema>()
export const USER_DAO           = publicDb.token<IUserDao>()
export const VOTE_DAO           = publicDb.token<IVoteDao>()
