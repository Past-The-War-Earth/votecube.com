import {
	MOVE_INCREMENTS,
	MoveIncrement,
	MV_INC_IDX,
	ZoomIndex
} from './cubeMoveMatrix'
import {
	Bool,
	Direction,
	IPositionPercentages,
	IValuesOutCallback,
	Move,
	moveCoordinates,
} from './cubeMovement'

export interface IViewport {

	cb: IValuesOutCallback,
	cr: ICubeRotation,
	el: Element | null
	increment: MoveIncrement
	pp: IPositionPercentages
	// Recently Moved Dimension
	rmd: Dimension[]
	x: number
	// xi: number
	y: number
	// yi: number
	vd: IVisibleDirection,
	zm: ZoomIndex

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

export type Dimension = 'x' | 'y' | 'z'
export type DimensionDirection = 'minus' | 'plus'

export type ValueArrayPosition = 0 | 1 | 2 | 3 | 4 | 5

export const viewport: IViewport = {
	cb: null,
	cr: {
		x: 0,
		y: 0
	},
	el: null,
	increment: MoveIncrement.FIVE,
	pp: {
		x: {
			minus: 0,
			plus: 0
		},
		y: {
			minus: 0,
			plus: 100
		},
		z: {
			minus: 0,
			plus: 0
		}
	},
	// Recently moved dimension
	rmd: [],
	vd: {
		x: 1,
		y: 1,
		z: 1
	},
	x: 0,
	// xi: 0,
	y: 0,
	// yi: 0,
	zm: MV_INC_IDX[MoveIncrement.FIFTEEN],
	// zoom: ZoomLevel.FINE,
	changeZoom(
		zoomIndex: ZoomIndex
	): void {
		// this.zoom = zoomLevel
		this.increment = MOVE_INCREMENTS[zoomIndex]
		// let moveIncrement: MoveIncrement
		// switch (increment) {
		// 	case ZoomLevel.BROAD:
		// 		moveIncrement = MoveIncrement.FORTY_FIVE
		// 		break
		// 	case ZoomLevel.COARSE:
		// 		moveIncrement = MoveIncrement.FIFTEEN
		// 		break
		// 	case ZoomLevel.FINE:
		// 		moveIncrement = MoveIncrement.FIVE
		// 		break
		// }moveCoordinates
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
		let matrixIndex
		if (moveX) {
			// [this.x, matrixIndex] =
			this.x = moveCoordinates(this.zm, this.x, xBy)
			// if(matrixIndex != null) {
			// 	this.xi = matrixIndex
			// }
		}
		if (moveY) {
			// [this.y, matrixIndex] =
			this.y = moveCoordinates(this.zm, this.y, yBy)
			// if(matrixIndex != null) {
			// 	this.yi = matrixIndex
			// }
		}
		// let xiRemainder = getModXAbsRemainder(this.xi, this.increment)
		// let yiRemainder = getModXAbsRemainder(this.yi, this.increment)

		this.moveToDegree()
	},
	/**
	 * Need to be able to move to a particular angle
	 */
	moveToDegree(): void {
		console.log('x: ' + this.x + '\t\ty: ' + this.y)
		this.cb(this.pp)
		this.el.style.transform = 'rotateX(' + this.x + 'deg) rotateY(' + this.y + 'deg)'
	},
	reset(): void {
		if (!this.el) {
			return
		}
		this.increment = MoveIncrement.FIVE
		// this.xi        = 0
		// this.yi        = 0
		// this.zoom      = ZoomLevel.FINE
		this.move(0, 0, 0, 0)
	}
}
