import {
	Id,
	IModel
} from './core/Model'

export type UserId = Id

export const USER_ACCOUNTS = 'USER_ACCOUNTS'

export interface IUser
	extends IModel {

	createdAt: Date
	id: UserId

}
