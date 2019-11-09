import {
	ICred,
	IUser,
	UserKey
}                             from '@votecube/model'
import {
	ICollection,
	ISchema
}                             from './common'
import {IVCDocumentReference} from './DocRef'
import {RootCollection}       from './RootCollection'

export interface IUsersCollection
	extends ICollection<UserKey, IUser> {

	creds(
		keyOrReference: UserKey | IVCDocumentReference<UserKey, IUser>
	): ICollection<UserKey, ICred, UserKey, IUser>

}

export class UsersCollection
	extends RootCollection<UserKey, IUser>
	implements IUsersCollection {

	constructor(
		schema: ISchema
	) {
		super('users', schema)
	}

	creds(
		keyOrReference: UserKey | IVCDocumentReference<UserKey, IUser>
	): ICollection<UserKey, ICred, UserKey, IUser> {
		return this.child(keyOrReference, 'creds')
	}

}
