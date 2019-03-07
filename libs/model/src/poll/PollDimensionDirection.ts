import {IColor}              from '../Color'
import {Id}                  from '../core/Model'
import {IDimensionDirection} from '../DimensionDirection'

export type PollDimensionDirectionId = Id

export interface IPollDimensionDirection {

	axis: 'x' | 'y' | 'z'
	color: IColor
	dimensionDirection: IDimensionDirection
	dir: -1 | 1
	id: PollDimensionDirectionId

}
