import {system}                         from '@airport/di'
// import {IFactorDao}               from './dao/factor/FactorDao'
import {IPollDao}                       from './dao/poll/PollDao'
import {IPollRevisionDao}               from './dao/poll/revision/PollRevisionDao'
import {IUserAccountDao}                from './dao/user/UserAccountDao'
// import {ILabelDao}                from './dao/poll/revision/label/LabelDao'
// import {IVoteDao}                 from './dao/vote/VoteDao'
import {IPollFactorPositionRevisionDuo} from './duo/poll/PollRevisionFactorPositionDuo'
import {IUserAccountDuo}                from './duo/user/UserAccountDuo'
import {IBasePollRunContinentDuo}       from './generated/baseDuos'

const relationalDb = system('votecube-ui').lib('relational-db')

//
// export const FACTOR_DAO               = relationalDb.token<IFactorDao>()
// export const LABEL_DAO                = relationalDb.token<ILabelDao>()
export const POLL_DAO                          = relationalDb.token<IPollDao>()
export const POLL_REVISION_DAO                 = relationalDb.token<IPollRevisionDao>()
export const POLL_FACTOR_POSITION_REVISION_DUO = relationalDb.token<IPollFactorPositionRevisionDuo>()
export const POLL_CONTINENT_DUO                = relationalDb.token<IBasePollRunContinentDuo>()
// export const VOTE_DAO                 = relationalDb.token<IVoteDao>()
export const USER_ACCOUNT_DAO                = relationalDb.token<IUserAccountDao>()
export const USER_ACCOUNT_DUO                = relationalDb.token<IUserAccountDuo>()
