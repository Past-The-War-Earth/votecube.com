import { app } from '@votecube/dependency-injection'
// import {IFactorDao}               from './dao/factor/FactorDao'
import {IPollDao}                       from './dao/poll/PollDao'
import {IPollRevisionDao}               from './dao/poll/revision/PollRevisionDao'
import {IUserAccountDao}                from './dao/user/UserAccountDao'
// import {ILabelDao}                from './dao/poll/revision/label/LabelDao'
// import {IVoteDao}                 from './dao/vote/VoteDao'
import {IPollFactorPositionRevisionDuo} from './duo/poll/PollRevisionFactorPositionDuo'
import {IUserAccountDuo}                from './duo/user/UserAccountDuo'
import {IBasePollRunContinentDuo}       from './generated/baseDuos'

const relationalDb = app('relational-db')

//
// export const FACTOR_DAO               = relationalDb.token<IFactorDao>('FACTOR_DAO')
// export const LABEL_DAO                = relationalDb.token<ILabelDao>('LABEL_DAO')
export const POLL_DAO                          = relationalDb.token<IPollDao>('POLL_DAO')
export const POLL_REVISION_DAO                 = relationalDb.token<IPollRevisionDao>('POLL_REVISION_DAO')
export const POLL_FACTOR_POSITION_REVISION_DUO = relationalDb.token<IPollFactorPositionRevisionDuo>('POLL_FACTOR_POSITION_REVISION_DUO')
export const POLL_CONTINENT_DUO                = relationalDb.token<IBasePollRunContinentDuo>('POLL_CONTINENT_DUO')
// export const VOTE_DAO                 = relationalDb.token<IVoteDao>('VOTE_DAO')
export const USER_ACCOUNT_DAO                = relationalDb.token<IUserAccountDao>('USER_ACCOUNT_DAO')
export const USER_ACCOUNT_DUO                = relationalDb.token<IUserAccountDuo>('USER_ACCOUNT_DUO')
