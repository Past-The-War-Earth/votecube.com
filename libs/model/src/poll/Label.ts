import {Id}             from '../core/Model'
import {ITemporalModel} from '../core/TemporalModel'
import {IUser}          from '../User'

export type LabelId = Id

export interface ILabel
	extends ITemporalModel {

	description: string
	id: LabelId
	name: string
	user: IUser

}
