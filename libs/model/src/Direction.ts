import {Id}             from './core/Model'
import {ITemporalModel} from './core/TemporalModel'

export type DirectionId = Id

export interface IDirection
	extends ITemporalModel {

	id: DirectionId
	name: string
	parent: IDirection

}
