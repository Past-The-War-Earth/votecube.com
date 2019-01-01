import {
	MatrixIndex,
	MoveIncrement,
	MV_INC_IDX,
	NUM_DIVISIONS,
	NUM_DIVS,
	populateDegreeValMatrix,
	STEP_DEGS,
	ZoomIndex,
} from './cubeMoveMatrix'

export enum Bool {
	False = 0,
	True  = 1
}

export enum Move {
	Down = -1,
	None = 0,
	Up   = 1
}

export type Direction = -1 | 1

export type PositionPercent =
	0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
	10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 |
	20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 |
	30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 |
	40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 |
	50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 |
	60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 |
	70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 |
	80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 |
	90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 |
	100

populateDegreeValMatrix()

export interface IPosition {
	x: number
	y: number
}

export interface IMousePosition {
	last?: IPosition
	start: IPosition
}

export interface IPositionData {
	x: IDimensionPositionData
	y: IDimensionPositionData
	z: IDimensionPositionData
}

export interface IDimensionPositionData {
	color: string
	dir: Direction
	valid: boolean
	value: PositionPercent
}

export type IValuesOutCallback =
	(values: IPositionData) => void

export const mouse: IMousePosition = {
	start: {x: undefined, y: undefined}
}

export function getModXAbsRemainder(
	num: number,
	moveIncrement: MoveIncrement
): number {
	const index     = MV_INC_IDX[moveIncrement]
	const divisions = NUM_DIVISIONS[index]
	let remainder   = num % divisions
	if (remainder < 0) {
		remainder = divisions + remainder
	}

	return remainder
}

export function moveCoordinates(
	zoomIndex: ZoomIndex,
	currentDegree: number,
	move: Move
): [number, MatrixIndex] {
	// not needed checked higher
	// if (!move) {
	// 	return [currentDegree, null]
	// }

	let zoomMultiplier = 9
	if (zoomIndex === 1) {
		zoomMultiplier = 3
	} else if (zoomIndex === 2) {
		zoomMultiplier = 1
	}

	let degreeChange      = STEP_DEGS * zoomMultiplier
	let zoomedMatrixIndex = Math.floor(
		currentDegree % 360 / degreeChange
	)

	let currentDegreeRemainder = currentDegree % degreeChange
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

	let rotation    = page * 360 + zoomedMatrixIndex * degreeChange
	let matrixIndex = normMatrixIdx(zoomedMatrixIndex * zoomMultiplier)

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
	let signedMatrixIndex = Math.floor(rotationDegrees % 360 / STEP_DEGS)

	return normMatrixIdx(signedMatrixIndex)
}
