"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const generated_1 = require("../../generated/generated");
const tokens_1 = require("../../tokens");
class UserAccountDao extends generated_1.BaseUserAccountDao {
    async signUp(userName, passwordHash) {
        const userAccount = {
            id: undefined,
            userName,
            passwordHash
        };
        await this.db.create(userAccount);
        return userAccount;
    }
    async findByUsername(userName) {
        let ua;
        return await this.db.findOne.tree({
            select: {},
            from: [
                ua = generated_1.Q.UserAccount
            ],
            where: ua.userName.equals(userName)
        });
    }
}
exports.UserAccountDao = UserAccountDao;
di_1.DI.set(tokens_1.USER_ACCOUNT_DAO, UserAccountDao);
//# sourceMappingURL=UserAccountDao.js.map