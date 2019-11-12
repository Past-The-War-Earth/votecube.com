import {
	IKeyed,
	ITimestamp,
	Key
} from './common'

export type User_Key = Key
export type User_Name = string

export interface IUser
	extends IKeyed<User_Key> {

	name: User_Name

}

export interface IUserCreated<K extends Key>
	extends IKeyed<K> {

	createdAt: ITimestamp
	userKey: User_Key

}

export interface ICred
	extends IKeyed<User_Key> {

	hash: string
	userKey: User_Key

}
