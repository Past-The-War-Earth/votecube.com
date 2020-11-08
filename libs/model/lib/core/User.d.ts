import { UserAccount_Id, UserAccount_UserName } from '@votecube/ecclesia';
import { ITimestamp } from './common';
export declare type User_Id = string;
export declare type User_Key = string;
export interface IUser {
    id: number;
    userName: UserAccount_UserName;
}
export interface IUserCreated {
    id: number;
    createdAt: ITimestamp;
    userId: UserAccount_Id;
}
export interface ICred {
    id: string;
    hash: string;
    userId: UserAccount_Id;
}
//# sourceMappingURL=User.d.ts.map