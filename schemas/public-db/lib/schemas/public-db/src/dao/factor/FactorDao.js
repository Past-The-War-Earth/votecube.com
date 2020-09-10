"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const tokens_1 = require("../../tokens");
class FactorDao {
    async getAll() {
        return [];
    }
}
exports.FactorDao = FactorDao;
di_1.DI.set(tokens_1.FACTOR_DAO, FactorDao);
//# sourceMappingURL=FactorDao.js.map