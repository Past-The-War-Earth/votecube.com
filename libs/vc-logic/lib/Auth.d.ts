import { IObservable } from '@airport/observe';
import { IUserAccount, UserAccount_UserName } from '@votecube/relational-db';
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
    signIn(username: string, password: string): Promise<IAuthError | void>;
    signOut(): Promise<void>;
    signUp(username: string, password: string): Promise<IAuthError | void>;
}
export declare class Auth implements IAuth {
    getUser(): IUserAccount;
    reactToUser(): Promise<IObservable<IUserAccount>>;
    signIn(username: UserAccount_UserName, password: string): Promise<IAuthError | void>;
    signOut(): Promise<void>;
    signUp(username: string, password: string): Promise<IAuthError | void>;
    private encodePassword;
}
