import {
	IKeyed,
	ITimestamp,
	Key
} from './common'

export type UserKey = Key

export interface IUser
	extends IKeyed<UserKey> {
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
