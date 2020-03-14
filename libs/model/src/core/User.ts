import {
	Id,
	UserAccount_Id,
	UserAccount_UserName
} from '@votecube/relational-db'
import {
	IIdentified,
	ITimestamp,
} from './common'

export interface IUser
	extends IIdentified<UserAccount_Id> {

	name: UserAccount_UserName

}

export interface IUserCreated<K extends Id>
	extends IIdentified<K> {

	createdAt: ITimestamp
	userId: UserAccount_Id

}

export interface ICred
	extends IIdentified<UserAccount_Id> {

	hash: string
	userId: UserAccount_Id

}
