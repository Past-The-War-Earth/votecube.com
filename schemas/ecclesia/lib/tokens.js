import { app } from '@votecube/dependency-injection';
const relationalDb = app('relational-db');
//
// export const FACTOR_DAO               = relationalDb.token<IFactorDao>('FACTOR_DAO')
// export const LABEL_DAO                = relationalDb.token<ILabelDao>('LABEL_DAO')
export const POLL_DAO = relationalDb.token('POLL_DAO');
export const POLL_REVISION_DAO = relationalDb.token('POLL_REVISION_DAO');
export const POLL_FACTOR_POSITION_REVISION_DUO = relationalDb.token('POLL_FACTOR_POSITION_REVISION_DUO');
export const POLL_CONTINENT_DUO = relationalDb.token('POLL_CONTINENT_DUO');
// export const VOTE_DAO                 = relationalDb.token<IVoteDao>('VOTE_DAO')
export const USER_ACCOUNT_DAO = relationalDb.token('USER_ACCOUNT_DAO');
export const USER_ACCOUNT_DUO = relationalDb.token('USER_ACCOUNT_DUO');
//# sourceMappingURL=tokens.js.map