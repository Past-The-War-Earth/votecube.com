import {
	IKeyed,
	ITimestamp,
	Key
} from './common'

export type UserKey = Key
export type UserName = string

export interface IUser
	extends IKeyed<UserKey> {

	name: UserName

}

export interface IUserCreated<K extends Key>
	extends IKeyed<K> {

	createdAt: ITimestamp
	userKey: UserKey

}

export interface ICred
	extends IKeyed<UserKey> {

	hash: string
	userKey: UserKey

}
