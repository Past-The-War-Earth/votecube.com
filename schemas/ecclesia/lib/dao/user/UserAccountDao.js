import { DI } from '@airport/di';
import { BaseUserAccountDao, Q } from '../../generated/generated';
import { USER_ACCOUNT_DAO } from '../../tokens';
export class UserAccountDao extends BaseUserAccountDao {
    async signUp(userName, passwordHash, context) {
        const userAccount = {
            id: undefined,
            userName,
            passwordHash
        };
        await this.db.save(userAccount, context);
        return userAccount;
    }
    async findByUsername(userName, context) {
        let ua;
        return await this.db.findOne.tree({
            select: {},
            from: [
                ua = Q.UserAccount
            ],
            where: ua.userName.equals(userName)
        }, context);
    }
}
DI.set(USER_ACCOUNT_DAO, UserAccountDao);
//# sourceMappingURL=UserAccountDao.js.map