import {
	container,
	DI
}                    from '@airport/di'
import {Factor_Axis} from '@votecube/model'
import {
	CUBE_MOVE_MATRIX,
	CUBE_MOVEMENT,
	VIEWPORT
}                    from '../diTokens'
import {
	MoveIncrement,
	PositionValues,
	ValueArrayPosition,
	ZoomIndex
}                    from './CubeMoveMatrix'
import {
	Bool,
	Direction,
	IUiVote,
	IUiVoteDimension,
	IValuesThruCallback,
	Move
}                    from './CubeMovement'

export interface IViewport {

	cb: IValuesThruCallback
	cr: ICubeRotation
	el: { [elementId: string]: Element }
	increment: MoveIncrement
	pd: IUiVote
	// Recently Moved Dimension
	rmd: Dimension[]
	x: number
	// xi: number
	y: number
	// yi: number
	vd: IVisibleDirection

	// zm: ZoomIndex

	move(
		moveX: Bool,
		xBy: Move,
		moveY?: Bool,
		yBy?: Move
	): void

	moveToDegree(): void

	changeZoom(
		// zoomLevel: ZoomLevel
		zoomIndex: ZoomIndex
	): void

	reset(): void

}

export interface ICubeRotation {
	x: number,
	y: number
}

export interface IVisibleDirection {
	x: Direction,
	y: Direction,
	z: Direction
}

export type Dimension = Factor_Axis

export class Viewport
	implements IViewport {

	cb        = null
	cr        = {
		x: 0,
		y: 0
	}
	el        = {}
	increment = MoveIncrement.FIVE
	pd        = null
	// Recently moved factor
	rmd       = []
	vd        = {
		x: 1 as Direction,
		y: 1 as Direction,
		z: 1 as Direction
	}
	x         = 0
	y         = 0

	// zm: MV_INC_IDX[MoveIncrement.FIFTEEN],
	changeZoom(
		zoomIndex: ZoomIndex
	): void {
		container(this).get(CUBE_MOVE_MATRIX).then(
			cubeMoveMatrix => {
				this.increment = cubeMoveMatrix.MOVE_INCREMENTS[zoomIndex]

				console.log('TODO: implement')
			})
	}

	move(
		moveX: Bool,
		xBy: Move,
		moveY: Bool,
		yBy: Move
	): void {
		container(this).get(CUBE_MOVE_MATRIX, CUBE_MOVEMENT).then(([
			                                                           cubeMoveMatrix,
			                                                           cubeMovement
		                                                           ]) => {
			if (!Object.keys(this.el).length) {
				return
			}
			if (!moveX && !moveY) {
				return
			}
			let xi
			let yi
			if (moveX) {
				[this.x, xi] = cubeMovement.moveCoordinates(
					// this.zm,
					this.x, xBy, cubeMoveMatrix)
			} else {
				xi = cubeMovement.getMatrixIdxFromDeg(this.x, cubeMoveMatrix)
			}
			if (moveY) {
				[this.y, yi] = cubeMovement.moveCoordinates(
					// this.zm,
					this.y, yBy, cubeMoveMatrix)
			} else {
				yi = cubeMovement.getMatrixIdxFromDeg(this.y, cubeMoveMatrix)
			}

			const values = cubeMoveMatrix.VALUE_MATRIX[xi][yi]

			function getDimensionState(
				positivePosition: ValueArrayPosition,
				negativePosition: ValueArrayPosition,
				positionValues: PositionValues,
				voteDimension: IUiVoteDimension
			): void {
				let dir: Direction = 1
				let value          = positionValues[positivePosition]
				if (positionValues[negativePosition]) {
					dir   = -1
					value = positionValues[negativePosition]
				} else if (!value) {
					dir = 0
				}
				voteDimension.dir   = dir
				voteDimension.valid = true
				voteDimension.value = value
			}

			getDimensionState(0, 5, values, this.pd.x)
			getDimensionState(1, 3, values, this.pd.y)
			getDimensionState(2, 4, values, this.pd.z)

			this.moveToDegree()
		})
	}

	/**
	 * Need to be able to move to a particular angle
	 */
	moveToDegree(): void {
		if (!this.cb) {
			return
		}
		// console.log('x: ' + this.x + '\t\ty: ' + this.y)
		this.cb(this.pd)

		for (const elementId in this.el) {
			this.el[elementId].style.transform = 'rotateX(' + this.x + 'deg) rotateY(' + this.y + 'deg)'
		}
	}

	reset(): void {
		if (!Object.keys(this.el).length) {
			return
		}
		this.increment = MoveIncrement.FIVE
		this.move(0, 0, 0, 0)
	}

}

DI.set(VIEWPORT, Viewport)
