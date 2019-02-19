import {IColor}         from './Color'
import {ITemporalModel} from './core/TemporalModel'

export type DimensionId = number

export interface IDimension
	extends ITemporalModel {

	color: IColor
	description: string
	id: DimensionId
	name: string
	parent: IDimension

}
