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
// export const FACTOR_DAO               = relationalDb.token<IFactorDao>('IFactorDao')
// export const LABEL_DAO                = relationalDb.token<ILabelDao>('ILabelDao')
export const POLL_DAO                          = relationalDb.token<IPollDao>('IPollDao')
export const POLL_REVISION_DAO                 = relationalDb.token<IPollRevisionDao>('IPollRevisionDao')
export const POLL_FACTOR_POSITION_REVISION_DUO = relationalDb.token<IPollFactorPositionRevisionDuo>('IPollFactorPositionRevisionDuo')
export const POLL_CONTINENT_DUO                = relationalDb.token<IBasePollRunContinentDuo>('IBasePollRunContinentDuo')
// export const VOTE_DAO                 = relationalDb.token<IVoteDao>('IVoteDao')
export const USER_ACCOUNT_DAO                = relationalDb.token<IUserAccountDao>('IUserAccountDao')
export const USER_ACCOUNT_DUO                = relationalDb.token<IUserAccountDuo>('IUserAccountDuo')
