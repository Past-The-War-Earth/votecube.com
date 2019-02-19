import {ITemporalModel} from './core/TemporalModel'
import {IDimension}     from './Dimension'
import {IDirection}     from './Direction'

export type DimensionDirectionId = number

export interface IDimensionDirection
	extends ITemporalModel {

	dimension: IDimension
	direction: IDirection
	id: DimensionDirectionId

}
