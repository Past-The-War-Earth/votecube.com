"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const publicDb = di_1.system('votecube-ui').lib('public-db');
exports.DB_CONVERTER = publicDb.token();
exports.DB_UTILS = publicDb.token();
exports.FACTOR_DAO = publicDb.token();
exports.LABEL_DAO = publicDb.token();
exports.POLL_DAO = publicDb.token();
exports.POLL_VARIATION_DAO = publicDb.token();
exports.SCHEMA = publicDb.token();
exports.USER_DAO = publicDb.token();
exports.VOTE_DAO = publicDb.token();
//# sourceMappingURL=tokens.js.map