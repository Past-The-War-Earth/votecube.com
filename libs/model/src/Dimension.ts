import {IColor}         from './Color'
import {Id}             from './core/Model'
import {ITemporalModel} from './core/TemporalModel'

export type DimensionId = Id

export interface IDimension
	extends ITemporalModel {

	color: IColor
	description: string
	id: DimensionId
	name: string
	parent: IDimension

}
