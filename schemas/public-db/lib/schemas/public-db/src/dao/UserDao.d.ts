import { IUser, User_Name } from '@votecube/model';
export declare type Password = string;
export interface IUserDao {
    signUp(username: User_Name, password: Password, user: IUser): Promise<void>;
}
export declare class UserDao implements IUserDao {
    signUp(username: User_Name, password: Password, user: IUser): Promise<void>;
}
