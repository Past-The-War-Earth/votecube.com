import { IObservable } from '@airport/observe';
import { IUserAccount, UserAccount_UserName } from '@votecube/relational-db';
export declare type Password = string;
export interface IAuthError {
    code?: string;
    message?: string;
}
export interface IAuth {
    getUser(): IUserAccount;
    reactToUser(): Promise<IObservable<IUserAccount>>;
    signIn(username: UserAccount_UserName, password: Password): Promise<IAuthError | IUserAccount>;
    signOut(): Promise<void>;
    signUp(username: UserAccount_UserName, password: Password): Promise<IAuthError | void>;
}
export declare class Auth implements IAuth {
    user: IUserAccount;
    getUser(): IUserAccount;
    reactToUser(): Promise<IObservable<IUserAccount>>;
    signIn(userName: UserAccount_UserName, password: Password): Promise<IAuthError | IUserAccount>;
    signOut(): Promise<void>;
    signUp(userName: UserAccount_UserName, password: Password): Promise<IAuthError | void>;
    private encodePassword;
}
