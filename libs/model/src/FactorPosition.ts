import {Id}             from './core/Model'
import {ITemporalModel} from './core/TemporalModel'
import {IFactor}        from './Factor'
import {IPosition}      from './Position'

export type FactorPositionId = Id

export const FACTOR_POSITIONS = 'FACTOR_POSITIONS'

export interface IFactorPosition
	extends ITemporalModel {

	factor: IFactor
	position: IPosition
	id: FactorPositionId

}
