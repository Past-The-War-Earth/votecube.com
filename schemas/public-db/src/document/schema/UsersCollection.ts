import {
	ICredDoc,
	IUserDoc,
	UserKey
}                             from '../User'
import {
	ICollection,
	ISchema
}                             from './common'
import {IVCDocumentReference} from './DocRef'
import {RootCollection}       from './RootCollection'

export interface IUsersCollection
	extends ICollection<UserKey, IUserDoc> {

	creds(
		keyOrReference: UserKey | IVCDocumentReference<UserKey, IUserDoc>
	): ICollection<UserKey, ICredDoc, UserKey, IUserDoc>

}

export class UsersCollection
	extends RootCollection<UserKey, IUserDoc>
	implements IUsersCollection {

	constructor(
		schema: ISchema
	) {
		super('users', schema)
	}

	creds(
		keyOrReference: UserKey | IVCDocumentReference<UserKey, IUserDoc>
	): ICollection<UserKey, ICredDoc, UserKey, IUserDoc> {
		return this.child(keyOrReference, 'creds')
	}

}
