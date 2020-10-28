import { system } from '@airport/di';
const relationalDb = system('votecube-ui').lib('relational-db');
//
// export const FACTOR_DAO               = relationalDb.token<IFactorDao>()
// export const LABEL_DAO                = relationalDb.token<ILabelDao>()
export const POLL_DAO = relationalDb.token();
export const POLL_REVISION_DAO = relationalDb.token();
export const POLL_FACTOR_POSITION_REVISION_DUO = relationalDb.token();
export const POLL_CONTINENT_DUO = relationalDb.token();
// export const VOTE_DAO                 = relationalDb.token<IVoteDao>()
export const USER_ACCOUNT_DAO = relationalDb.token();
export const USER_ACCOUNT_DUO = relationalDb.token();
//# sourceMappingURL=tokens.js.map