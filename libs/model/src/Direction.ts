import {ITemporalModel} from './core/TemporalModel'

export type DirectionId = number

export interface IDirection
	extends ITemporalModel {

	id: DirectionId
	name: string
	parent: IDirection

}
