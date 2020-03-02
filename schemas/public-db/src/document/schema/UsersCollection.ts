import {
	ICred,
	IUser,
	User_Id
}                             from '@votecube/model'
import {
	ICollection,
	ISchema
}                             from './common'
import {IVCDocumentReference} from './DocRef'
import {RootCollection}       from './RootCollection'

export interface IUsersCollection
	extends ICollection<User_Id, IUser> {

	creds(
		keyOrReference: User_Id | IVCDocumentReference<User_Id, IUser>
	): ICollection<User_Id, ICred, User_Id, IUser>

}

export class UsersCollection
	extends RootCollection<User_Id, IUser>
	implements IUsersCollection {

	constructor(
		schema: ISchema
	) {
		super('users', schema)
	}

	creds(
		keyOrReference: User_Id | IVCDocumentReference<User_Id, IUser>
	): ICollection<User_Id, ICred, User_Id, IUser> {
		return this.child(keyOrReference, 'creds')
	}

}
