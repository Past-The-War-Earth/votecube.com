import {IUser}  from '../User'
import {IModel} from './Model'

export interface ITemporalModel
	extends IModel {

	createdAt: Date
	user: IUser

}
