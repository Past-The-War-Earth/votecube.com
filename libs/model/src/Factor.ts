import {IColor}         from './Color'
import {Id}             from './core/Model'
import {ITemporalModel} from './core/TemporalModel'

export type FactorId = Id

export interface IFactor
	extends ITemporalModel {

	color: IColor
	description: string
	id: FactorId
	name: string
	parent: IFactor

}
