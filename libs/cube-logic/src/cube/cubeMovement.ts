import {
	IVote,
	PollFactorPosition_Dir,
	VoteFactor_Share
}                  from '@votecube/public-db'
import {
	MatrixIndex,
	NUM_DIVS,
	populateDegreeValMatrix,
	STEP_DEGS,
}                  from './cubeMoveMatrix'
import {Dimension} from './Viewport'

export enum Bool {
	False = 0,
	True  = 1
}

export enum Move {
	Down = -1,
	None = 0,
	Up   = 1
}

export type Direction = PollFactorPosition_Dir

export type PositionPercent = VoteFactor_Share

populateDegreeValMatrix()

export interface IPosition {
	x: number
	y: number
}

export interface IMousePosition {
	last?: IPosition
	start: IPosition
}

export interface IUiVote
	extends IVote {
	x: IUiVoteDimension
	y: IUiVoteDimension
	z: IUiVoteDimension
}

export interface IUiVoteDimension {
	axis?: Dimension
	dir: Direction
	valid: boolean
	value: PositionPercent
}

export type IValuesOutCallback =
	(values: IUiVote) => void

export const mouse: IMousePosition = {
	start: {x: undefined, y: undefined}
}

/*
export function getModXAbsRemainder(
	num: number,
	moveIncrement: MoveIncrement
): number {
	const axis     = MV_INC_IDX[moveIncrement]
	const divisions = NUM_DIVISIONS[axis]
	let remainder   = num % divisions
	if (remainder < 0) {
		remainder = divisions + remainder
	}

	return remainder
}
*/
export function moveCoordinates(
	// zoomIndex: ZoomIndex,
	currentDegree: number,
	move: Move
): [number, MatrixIndex] {
	// not needed checked higher
	// if (!move) {
	// 	return [currentDegree, null]
	// }

	// let zoomMultiplier = 9
	// if (zoomIndex === 1) {
	// 	zoomMultiplier = 3
	// } else if (zoomIndex === 2) {
	// 	zoomMultiplier = 1
	// }

	const degreeChange    = STEP_DEGS
	// * zoomMultiplier
	let zoomedMatrixIndex = Math.floor(
		currentDegree % 360 / degreeChange
	)

	const currentDegreeRemainder = currentDegree % degreeChange
	if (move > 0) {
		zoomedMatrixIndex++
	} else {
		if (!currentDegreeRemainder) {
			zoomedMatrixIndex--
		}
	}

	let page = Math.floor(currentDegree / 360)
	if (currentDegree < 0) {
		page = -Math.floor(Math.abs(currentDegree) / 360)
	}

	const rotation    = page * 360 + zoomedMatrixIndex * degreeChange
	const matrixIndex = normMatrixIdx(zoomedMatrixIndex
		// * zoomMultiplier
	)

	return [rotation, matrixIndex]
}

export function normMatrixIdx(
	signedMatrixIndex: number
): MatrixIndex {
	const numberOfMatrixDivisions = NUM_DIVS

	let normalizedMatrixIndex = signedMatrixIndex
	if (signedMatrixIndex < 0) {
		normalizedMatrixIndex = numberOfMatrixDivisions + signedMatrixIndex as MatrixIndex
	}

	return (normalizedMatrixIndex % numberOfMatrixDivisions) as MatrixIndex
}

export function getMatrixIdxFromDeg(
	rotationDegrees: number
): MatrixIndex {
	const signedMatrixIndex = Math.floor(rotationDegrees % 360 / STEP_DEGS)

	return normMatrixIdx(signedMatrixIndex)
}
