import { DI } from '@airport/di';
import { BaseUserAccountDao, Q } from '../../generated/generated';
import { USER_ACCOUNT_DAO } from '../../tokens';
export class UserAccountDao extends BaseUserAccountDao {
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
                ua = Q.UserAccount
            ],
            where: ua.userName.equals(userName)
        });
    }
}
DI.set(USER_ACCOUNT_DAO, UserAccountDao);
//# sourceMappingURL=UserAccountDao.js.map