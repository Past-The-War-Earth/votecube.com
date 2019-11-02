import {
	IDoc,
	ITimestamp,
	Key
} from './common'

export type UserKey = Key

export interface IUserDoc
	extends IDoc<UserKey> {
}

export interface IUserCreatedDoc<K extends Key>
	extends IDoc<K> {

	createdAt: ITimestamp
	userKey: UserKey

}

export interface ICredDoc
	extends IDoc<UserKey> {
	hash: string
	userKey: UserKey
}
