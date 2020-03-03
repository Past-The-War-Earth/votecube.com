import { system } from '@airport/di';
const publicDb = system('votecube-ui').lib('public-db');
export const DB_CONVERTER = publicDb.token();
export const DB_UTILS = publicDb.token();
export const FACTOR_DAO = publicDb.token();
export const LABEL_DAO = publicDb.token();
export const POLL_DAO = publicDb.token();
export const SCHEMA = publicDb.token();
export const USER_DAO = publicDb.token();
export const VOTE_DAO = publicDb.token();
//# sourceMappingURL=tokens.js.map