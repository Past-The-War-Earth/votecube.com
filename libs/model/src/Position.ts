import {Id}             from './core/Model'
import {ITemporalModel} from './core/TemporalModel'

export type PositionId = Id

export const POSITIONS = 'POSITIONS'

export interface IPosition
	extends ITemporalModel {

	key: PositionId
	name: string
	parent: IPosition

}
