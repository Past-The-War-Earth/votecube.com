import {PositionValues} from '../cubeMoveMatrix'

export type DistanceFromMatrixPosition = 0 | 1 | 2 | 3 | 4 | 5

export type PercentChange = 1 | 5 | 20

export interface FinalPosition {
	x: number,
	y: number
}

export interface MatrixPosition {
	values: PositionValues
	i: number,
	j: number
}
