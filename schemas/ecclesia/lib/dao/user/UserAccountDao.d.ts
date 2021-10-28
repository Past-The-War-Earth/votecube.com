import { BaseUserAccountDao, IBaseUserAccountDao, IUserAccount } from '../../generated/generated';
import { IVotecubeContext, UserAccount } from '../../index';
import { UserAccount_UserName } from '../../types/types';
export interface IUserAccountDao extends IBaseUserAccountDao {
    signUp(userAccount: UserAccount, context: IVotecubeContext): Promise<IUserAccount>;
    findOneByUsername(userName: UserAccount_UserName, context: IVotecubeContext): Promise<IUserAccount>;
}
export declare class UserAccountDao extends BaseUserAccountDao implements IUserAccountDao {
    signUp(userAccount: UserAccount, context: IVotecubeContext): Promise<IUserAccount>;
    findOneByUsername(userName: UserAccount_UserName, context: IVotecubeContext): Promise<IUserAccount>;
}
//# sourceMappingURL=UserAccountDao.d.ts.map