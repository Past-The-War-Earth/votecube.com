import {
	IIdentified,
	ITimestamp,
	Id
} from './common'

export type User_Id = Id
export type User_Name = string

export interface IUser
	extends IIdentified<User_Id> {

	name: User_Name

}

export interface IUserCreated<K extends Id>
	extends IIdentified<K> {

	createdAt: ITimestamp
	userId: User_Id

}

export interface ICred
	extends IIdentified<User_Id> {

	hash: string
	userId: User_Id

}
