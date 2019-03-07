import {Id}             from './core/Model'
import {ITemporalModel} from './core/TemporalModel'
import {IDimension}     from './Dimension'
import {IDirection}     from './Direction'

export type DimensionDirectionId = Id

export interface IDimensionDirection
	extends ITemporalModel {

	dimension: IDimension
	direction: IDirection
	id: DimensionDirectionId

}
