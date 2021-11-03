import { Observable } from 'rxjs';
import { IUserInfo } from '.';
export interface IAuthError {
    code?: string;
    message?: string;
}
export declare type Auth_Password = string;
export interface IAuth {
    getUser(): IUserInfo;
    reactToUser(): Promise<Observable<IUserInfo>>;
    signIn(username: string, password: string): Promise<void>;
    signOut(): Promise<void>;
}
export declare class Auth implements IAuth {
    user: IUserInfo;
    getUser(): IUserInfo;
    reactToUser(): Promise<Observable<IUserInfo>>;
    signIn(username: string, password: string): Promise<void>;
    signOut(): Promise<void>;
}
//# sourceMappingURL=Auth.d.ts.map