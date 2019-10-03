import {PollFactorPositionVariation_Axis} from '@votecube/public-db'
import {
	MOVE_INCREMENTS,
	MoveIncrement,
	PositionValues,
	VALUE_MATRIX,
	ValueArrayPosition,
	ZoomIndex
}                                         from './cubeMoveMatrix'
import {
	Bool,
	Direction,
	getMatrixIdxFromDeg,
	IUiVote,
	IUiVoteDimension,
	IValuesOutCallback,
	Move,
	moveCoordinates,
}                                         from './cubeMovement'

export interface IViewport {

	cb: IValuesOutCallback,
	cr: ICubeRotation,
	el: Element | null
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

export type Dimension = PollFactorPositionVariation_Axis

export const viewport: IViewport = {
	cb: null,
	cr: {
		x: 0,
		y: 0
	},
	el: null,
	increment: MoveIncrement.FIVE,
	pd: null,
	// Recently moved factor
	rmd: [],
	vd: {
		x: 1,
		y: 1,
		z: 1
	},
	x: 0,
	y: 0,
	// zm: MV_INC_IDX[MoveIncrement.FIFTEEN],
	changeZoom(
		zoomIndex: ZoomIndex
	): void {
		this.increment = MOVE_INCREMENTS[zoomIndex]

		console.log('TODO: implement')
	},
	move(
		moveX: Bool,
		xBy: Move,
		moveY: Bool,
		yBy: Move
	): void {
		if (!this.el) {
			return
		}
		if (!moveX && !moveY) {
			return
		}
		let xi
		let yi
		if (moveX) {
			[this.x, xi] = moveCoordinates(
				// this.zm,
				this.x, xBy)
		} else {
			xi = getMatrixIdxFromDeg(this.x)
		}
		if (moveY) {
			[this.y, yi] = moveCoordinates(
				// this.zm,
				this.y, yBy)
		} else {
			yi = getMatrixIdxFromDeg(this.y)
		}

		const values = VALUE_MATRIX[xi][yi]

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
	},
	/**
	 * Need to be able to move to a particular angle
	 */
	moveToDegree(): void {
		// console.log('x: ' + this.x + '\t\ty: ' + this.y)
		this.cb(this.pd)
		if (this.el) {
			this.el.style.transform = 'rotateX(' + this.x + 'deg) rotateY(' + this.y + 'deg)'
		}
	},
	reset(): void {
		if (!this.el) {
			return
		}
		this.increment = MoveIncrement.FIVE
		this.move(0, 0, 0, 0)
	}
}
