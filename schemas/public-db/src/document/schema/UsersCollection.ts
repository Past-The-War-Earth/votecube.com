import {
	ICred,
	IUser,
	User_Key
}                             from '@votecube/model'
import {
	ICollection,
	ISchema
}                             from './common'
import {IVCDocumentReference} from './DocRef'
import {RootCollection}       from './RootCollection'

export interface IUsersCollection
	extends ICollection<User_Key, IUser> {

	creds(
		keyOrReference: User_Key | IVCDocumentReference<User_Key, IUser>
	): ICollection<User_Key, ICred, User_Key, IUser>

}

export class UsersCollection
	extends RootCollection<User_Key, IUser>
	implements IUsersCollection {

	constructor(
		schema: ISchema
	) {
		super('users', schema)
	}

	creds(
		keyOrReference: User_Key | IVCDocumentReference<User_Key, IUser>
	): ICollection<User_Key, ICred, User_Key, IUser> {
		return this.child(keyOrReference, 'creds')
	}

}
