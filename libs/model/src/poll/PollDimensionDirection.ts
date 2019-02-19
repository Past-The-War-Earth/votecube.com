import {IColor}              from '../Color'
import {IDimensionDirection} from '../DimensionDirection'

export type PollDimensionDirectionId = number

export interface IPollDimensionDirection {

	axis: 'x' | 'y' | 'z'
	color: IColor
	dimensionDirection: IDimensionDirection
	dir: -1 | 1
	id: PollDimensionDirectionId

}
