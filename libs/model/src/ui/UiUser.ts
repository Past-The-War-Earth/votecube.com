import {
	Id,
	UserAccount_Id
}                     from '@votecube/ecclesia'
import {IIdentified,} from '../core/common'

export interface IUiUserCreated<K extends Id>
	extends IIdentified<K> {

	createdAt: Date
	userId: UserAccount_Id

}
