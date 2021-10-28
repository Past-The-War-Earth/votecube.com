import { DI } from '@airport/di';
import { BaseUserAccountDao, Q } from '../../generated/generated';
import { USER_ACCOUNT_DAO } from '../../tokens';
export class UserAccountDao extends BaseUserAccountDao {
    /*
@UserAccountDao.Save({
    id: I,
    userName: A,
    passwordHash: A
})
signUpOrig
*/
    async signUp(userAccount, context) {
        await this.db.save(userAccount, context);
        return userAccount;
    }
    /*
    @UserAccountDao.FindOne.Tree((
        userName: UserAccount_UserName,
        Q: LocalQSchema,
        ua: QUserAccount
    ) => ({
        select: {},
        from: [
            ua = Q.UserAccount
        ],
        where: ua.userName.equals(userName)
    }))
    findOneByUsernameOrig
    */
    async findOneByUsername(userName, context) {
        let ua;
        return this.db.findOne.tree({
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