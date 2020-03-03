import { IObservable } from '@airport/observe';
import { IUser, User_Name } from '@votecube/model';
import { Password } from '@votecube/public-db';
export interface IAuthError {
    code?: string;
    message?: string;
}
export interface IFbAuthUser {
    email: string;
    uid: string;
}
export interface IAppUser extends IUser {
    db: IFbAuthUser;
}
export interface IAuth {
    getFbAuthUser(): IFbAuthUser;
    getUser(dbUser?: IFbAuthUser): IAppUser;
    reactToUser(): Promise<IObservable<IAppUser>>;
    signIn(username: string, password: string): Promise<IAuthError | void>;
    signOut(): Promise<void>;
    signUp(username: string, password: string): Promise<IAuthError | void>;
}
export declare class Auth implements IAuth {
    getFbAuthUser(): IFbAuthUser;
    getUser(dbUser?: IFbAuthUser): IAppUser;
    reactToUser(): Promise<IObservable<IAppUser>>;
    signIn(username: User_Name, password: Password): Promise<IAuthError | void>;
    signOut(): Promise<void>;
    signUp(username: string, password: string): Promise<IAuthError | void>;
    private encodePassword;
}
