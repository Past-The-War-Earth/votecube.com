import {PositionValues} from '../cubeMoveMatrix'

export type DistanceFromMatrixPosition = 0 | 1 | 2 | 3 | 4 | 5

export type PercentChange = 1 | 5 | 20

export interface IFinalPosition {
	x: number,
	y: number
}

export interface IMatrixPosition {
	i: number,
	j: number,
	done?: boolean;
	key?: string;
	values: PositionValues
}
