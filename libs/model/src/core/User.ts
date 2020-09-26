import {
	Id,
	UserAccount_Id,
	UserAccount_UserName
} from '@votecube/ecclesia'
import {
	IIdentified,
	ITimestamp,
} from './common'

export type User_Id = string;
export type User_Key = string;

export interface IUser {

	id: string
	name: UserAccount_UserName

}

export interface IUserCreated {

	id: number
	createdAt: ITimestamp
	userId: UserAccount_Id

}

export interface ICred {

	id: string
	hash: string
	userId: UserAccount_Id

}
