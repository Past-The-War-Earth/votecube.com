import { DI } from '@airport/di';
import { BaseUserAccountDao, Q } from '../../generated/generated';
import { USER_ACCOUNT_DAO } from '../../tokens';
export class UserAccountDao extends BaseUserAccountDao {
    async signUp(userName, passwordHash, ctx) {
        const userAccount = {
            id: undefined,
            userName,
            passwordHash
        };
        await this.db.create(userAccount, ctx);
        return userAccount;
    }
    async findByUsername(userName, ctx) {
        let ua;
        return await this.db.findOne.tree({
            select: {},
            from: [
                ua = Q.UserAccount
            ],
            where: ua.userName.equals(userName)
        }, ctx);
    }
}
DI.set(USER_ACCOUNT_DAO, UserAccountDao);
//# sourceMappingURL=UserAccountDao.js.map