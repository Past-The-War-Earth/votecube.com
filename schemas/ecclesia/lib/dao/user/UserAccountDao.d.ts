import { BaseUserAccountDao, IBaseUserAccountDao, IUserAccount } from '../../generated/generated';
import { UserAccount_PasswordHash, UserAccount_UserName } from '../../types/types';
export interface IUserAccountDao extends IBaseUserAccountDao {
    signUp(userName: UserAccount_UserName, passwordHash: UserAccount_PasswordHash): Promise<IUserAccount>;
    findByUsername(userName: UserAccount_UserName): Promise<IUserAccount>;
}
export declare class UserAccountDao extends BaseUserAccountDao implements IUserAccountDao {
    signUp(userName: UserAccount_UserName, passwordHash: UserAccount_PasswordHash): Promise<IUserAccount>;
    findByUsername(userName: UserAccount_UserName): Promise<IUserAccount>;
}
//# sourceMappingURL=UserAccountDao.d.ts.map