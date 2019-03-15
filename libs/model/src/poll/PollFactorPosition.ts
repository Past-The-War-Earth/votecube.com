import {IColor}          from '../Color'
import {Id}              from '../core/Model'
import {IFactorPosition} from '../FactorPosition'

export type PollFactorPositionId = Id

export interface IPollFactorPosition {

	axis: 'x' | 'y' | 'z'
	color: IColor
	factorPosition: IFactorPosition
	dir: -1 | 1
	id: PollFactorPositionId

}
