import {diToken}                  from '@airport/di'
// import {IFactorDao}               from './dao/factor/FactorDao'
// import {IPollDao}                 from './dao/poll/PollDao'
// import {ILabelDao}                from './dao/poll/variation/label/LabelDao'
// import {IVoteDao}                 from './dao/vote/VoteDao'
import {IPollFactorPositionDuo}   from './duo/poll/PollFactorPositionDuo'
import {IBasePollLTFContinentDuo} from './generated/baseDuos'
//
// export const FACTOR_DAO               = diToken<IFactorDao>()
// export const LABEL_DAO                = diToken<ILabelDao>()
// export const POLL_DAO                 = diToken<IPollDao>()
export const POLL_FACTOR_POSITION_DUO = diToken<IPollFactorPositionDuo>()
export const POLL_CONTINENT_DUO       = diToken<IBasePollLTFContinentDuo>()
// export const VOTE_DAO                 = diToken<IVoteDao>()
