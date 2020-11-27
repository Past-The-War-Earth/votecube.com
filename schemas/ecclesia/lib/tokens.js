import { system } from '@airport/di';
const relationalDb = system('votecube-ui').lib('relational-db');
//
// export const FACTOR_DAO               = relationalDb.token<IFactorDao>('IFactorDao')
// export const LABEL_DAO                = relationalDb.token<ILabelDao>('ILabelDao')
export const POLL_DAO = relationalDb.token('IPollDao');
export const POLL_REVISION_DAO = relationalDb.token('IPollRevisionDao');
export const POLL_FACTOR_POSITION_REVISION_DUO = relationalDb.token('IPollFactorPositionRevisionDuo');
export const POLL_CONTINENT_DUO = relationalDb.token('IBasePollRunContinentDuo');
// export const VOTE_DAO                 = relationalDb.token<IVoteDao>('IVoteDao')
export const USER_ACCOUNT_DAO = relationalDb.token('IUserAccountDao');
export const USER_ACCOUNT_DUO = relationalDb.token('IUserAccountDuo');
//# sourceMappingURL=tokens.js.map