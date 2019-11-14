import {DI}            from '@airport/di'
import {
	Factor_Axis,
	Factor_Number,
	IVote,
	Position_Dir,
	VoteFactor_Value
}                      from '@votecube/model'
import {CUBE_MOVEMENT} from '../diTokens'
import {
	ICubeMoveMatrix,
	MatrixIndex
}                      from './CubeMoveMatrix'
import {Dimension}     from './Viewport'

export enum Bool {
	False = 0,
	True  = 1
}

export enum Move {
	Down = -1,
	None = 0,
	Up   = 1
}

export type Direction = Position_Dir | 0

export type PositionPercent = VoteFactor_Value

export interface IPosition {

	x: number
	y: number

}

export interface IMousePosition {

	last?: IPosition
	start: IPosition

}

export interface IUiVote {

	axisToFactorMapping: {
		x: Factor_Number
		y: Factor_Number
		z: Factor_Number
	}
	factorToAxisMapping: IFactorToAxisMapping
	vote: IVote
	x: IUiVoteDimension
	y: IUiVoteDimension
	z: IUiVoteDimension

}

export interface IFactorToAxisMapping {

	1: Factor_Axis
	2: Factor_Axis
	3: Factor_Axis

}

export interface IUiVoteDimension {
	axis?: Dimension
	dir: Direction
	valid: boolean
	value: PositionPercent
}

export type IValuesOutCallback =
	(vote: IVote) => void

export type IValuesThruCallback =
	(vote: IUiVote) => void

export interface ICubeMovement {

	mouse: IMousePosition

	getMatrixIdxFromDeg(
		rotationDegrees: number,
		cubeMoveMatrix: ICubeMoveMatrix
	): MatrixIndex

	moveCoordinates(
		// zoomIndex: ZoomIndex,
		currentDegree: number,
		move: Move,
		cubeMoveMatrix: ICubeMoveMatrix
	): [number, MatrixIndex]

	normMatrixIdx(
		signedMatrixIndex: number,
		cubeMoveMatrix: ICubeMoveMatrix
	): MatrixIndex

}

export class CubeMovement
	implements ICubeMovement {

	mouse: IMousePosition = {
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

	getMatrixIdxFromDeg(
		rotationDegrees: number,
		cubeMoveMatrix: ICubeMoveMatrix
	): MatrixIndex {
		const signedMatrixIndex = Math.floor(rotationDegrees % 360 / cubeMoveMatrix.STEP_DEGS)

		return this.normMatrixIdx(signedMatrixIndex, cubeMoveMatrix)
	}

	moveCoordinates(
		// zoomIndex: ZoomIndex,
		currentDegree: number,
		move: Move,
		cubeMoveMatrix: ICubeMoveMatrix
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

		const degreeChange    = cubeMoveMatrix.STEP_DEGS
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
		const matrixIndex = this.normMatrixIdx(zoomedMatrixIndex
			// * zoomMultiplier
			, cubeMoveMatrix
		)

		return [rotation, matrixIndex]
	}

	normMatrixIdx(
		signedMatrixIndex: number,
		cubeMoveMatrix: ICubeMoveMatrix
	): MatrixIndex {
		const numberOfMatrixDivisions = cubeMoveMatrix.NUM_DIVISIONS

		let normalizedMatrixIndex = signedMatrixIndex
		if (signedMatrixIndex < 0) {
			normalizedMatrixIndex = numberOfMatrixDivisions + signedMatrixIndex as MatrixIndex
		}

		return (normalizedMatrixIndex % numberOfMatrixDivisions) as MatrixIndex
	}

}

DI.set(CUBE_MOVEMENT, CubeMovement)
