import { IObservable } from '@airport/observe';
import { IUserAccount, UserAccount_Email, UserAccount_UserName } from '@votecube/ecclesia';
export interface IAuthError {
    code?: string;
    message?: string;
}
export declare type Auth_Password = string;
export interface IAuth {
    getUser(): IUserAccount;
    reactToUser(): Promise<IObservable<IUserAccount>>;
    signIn(username: UserAccount_UserName, password: Auth_Password): Promise<IAuthError | IUserAccount>;
    signOut(): Promise<void>;
    signUp(email: UserAccount_Email, password: Auth_Password): Promise<IAuthError | void>;
}
export declare class Auth implements IAuth {
    user: IUserAccount;
    getUser(): IUserAccount;
    reactToUser(): Promise<IObservable<IUserAccount>>;
    signIn(userName: UserAccount_UserName, password: Auth_Password): Promise<IAuthError | IUserAccount>;
    signOut(): Promise<void>;
    signUp(userName: UserAccount_UserName, password: Auth_Password): Promise<IAuthError | void>;
    private encodePassword;
}
//# sourceMappingURL=Auth.d.ts.map