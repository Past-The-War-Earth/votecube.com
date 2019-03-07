import {Id}             from './core/Model'
import {ITemporalModel} from './core/TemporalModel'

export type UserId = Id

export interface IUser
	extends ITemporalModel {

	id: UserId

}
