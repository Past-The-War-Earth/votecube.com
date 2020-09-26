import { IObservable } from '@airport/observe';
import { IUserAccount, UserAccount_UserName } from '@votecube/ecclesia';
export interface IAuthError {
    code?: string;
    message?: string;
}
export interface IFbAuthUser {
    email: string;
    uid: string;
}
export interface IAuth {
    getUser(): IUserAccount;
    reactToUser(): Promise<IObservable<IUserAccount>>;
    signIn(username: string, password: string): Promise<IAuthError | IUserAccount>;
    signOut(): Promise<void>;
    signUp(email: string, password: string): Promise<IAuthError | void>;
}
export declare class Auth implements IAuth {
    user: IUserAccount;
    getUser(): IUserAccount;
    reactToUser(): Promise<IObservable<IUserAccount>>;
    signIn(userName: UserAccount_UserName, password: string): Promise<IAuthError | IUserAccount>;
    signOut(): Promise<void>;
    signUp(userName: string, password: string): Promise<IAuthError | void>;
    private encodePassword;
}
//# sourceMappingURL=Auth.d.ts.map