import {ITemporalModel} from './core/TemporalModel'

export type UserId = number

export interface IUser
	extends ITemporalModel {

	id: UserId

}
