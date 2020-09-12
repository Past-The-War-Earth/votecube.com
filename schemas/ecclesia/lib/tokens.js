"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const relationalDb = di_1.system('votecube-ui').lib('relational-db');
//
// export const FACTOR_DAO               = relationalDb.token<IFactorDao>()
// export const LABEL_DAO                = relationalDb.token<ILabelDao>()
exports.POLL_DAO = relationalDb.token();
exports.POLL_REVISION_DAO = relationalDb.token();
exports.POLL_FACTOR_POSITION_REVISION_DUO = relationalDb.token();
exports.POLL_CONTINENT_DUO = relationalDb.token();
// export const VOTE_DAO                 = relationalDb.token<IVoteDao>()
exports.USER_ACCOUNT_DAO = relationalDb.token();
exports.USER_ACCOUNT_DUO = relationalDb.token();
//# sourceMappingURL=tokens.js.map