"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const relationalDb = di_1.system("votecube-ui").lib("relational-db");
//
// export const FACTOR_DAO               = relationalDb.token<IFactorDao>()
// export const LABEL_DAO                = relationalDb.token<ILabelDao>()
// export const POLL_DAO                 = relationalDb.token<IPollDao>()
exports.POLL_FACTOR_POSITION_REVISION_DUO = relationalDb.token();
exports.POLL_CONTINENT_DUO = relationalDb.token();
// export const VOTE_DAO                 = relationalDb.token<IVoteDao>()
//# sourceMappingURL=tokens.js.map