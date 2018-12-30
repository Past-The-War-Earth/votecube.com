import {ZoomIndex}                 from '../cubeMoveMatrix'
import {
	Direction,
	IDimensionPercentages,
	PositionPercent
}                                  from '../cubeMovement'
import {
	Dimension,
	IViewport,
	viewport
}                                  from '../Viewport'
import {DegreePositionChooser}     from './DegreePositionChooser'
import {FinalPositionFinder}       from './FinalPositionFinder'
import {MatrixValueChooser}        from './MatrixValueChooser'
import {PercentagePositionChooser} from './PercentagePositionChooser'
import {PercentChange}             from './types'

export interface IMutationApi {

	changeZoom(
		zoomIndex: ZoomIndex
	): void

	moveToValue(
		dimension: Dimension,
		value: string
	): void

	moveX(
		direction: Direction
	): void

	moveY(
		direction: Direction
	): void

	moveZ(
		direction: Direction
	): void

}

export class MutationApi
	implements IMutationApi {

	private degreePositionChooser     = new DegreePositionChooser()
	private finalPositionFinder       = new FinalPositionFinder()
	private matrixValueChooser        = new MatrixValueChooser()
	private percentagePositionChooser = new PercentagePositionChooser()

	constructor(
		private vp: IViewport
	) {
	}

	changeZoom(
		zoomIndex: ZoomIndex
	): void {
		this.vp.zm = zoomIndex
	}

	moveX(
		direction: Direction
	): void {
		this.move('x', direction)
	}

	moveY(
		direction: Direction
	): void {
		this.move('y', direction)
	}

	moveZ(
		direction: Direction
	): void {
		this.move('z', direction)
	}

	moveToValue(
		dimension: Dimension,
		value: any
	): void {
		const numericValue          = parseInt(value) as PositionPercent
		this.vp.pp[dimension].valid = !isNaN(value) && numericValue >= 0 && numericValue <= 100
		if (!this.vp.pp[dimension].valid) {
			this.vp.cb(this.vp.pp)
		}
		this.moveToPercent(dimension, numericValue)
	}

	private move(
		dimension: Dimension,
		direction: Direction
		// dimensionPercentages: IDimensionPercentages
	): void {
		const dimensionPercentages = this.vp.pp[dimension]
		if (!this.isChangeAllowed(direction, dimensionPercentages)) {
			return
		}
		let percentChange = this.getPercentChange()
		let nextStep
		switch (direction) {
			case 1:
				nextStep = this.getNextStep(
					dimensionPercentages.plus, dimensionPercentages.minus, direction)
				break
			case -1:
				nextStep = this.getNextStep(
					dimensionPercentages.minus, dimensionPercentages.plus, direction)
				break
		}

		this.moveToPercent(dimension, null, percentChange, direction)
	}

	private moveToPercent(
		dimension: Dimension,
		newPercent: PositionPercent,
		percentChange?: PercentChange,
		direction?: Direction
	): void {
		// First see the order of recently moved dimensions

		this.vp.rmd = this.vp.rmd.filter(
			changedDim => dimension !== changedDim)
		this.vp.rmd.unshift(dimension)
		let numPreviousMoves = this.vp.rmd.length
		if (numPreviousMoves > 3) {
			this.vp.rmd.pop()
		}

		if (percentChange) {
			this.percentagePositionChooser.changePositionPercentages(
				dimension, percentChange, direction, this.vp)
		} else {
			this.percentagePositionChooser.setPositionPercentages(
				dimension, newPercent, this.getDirection(dimension, this.vp), this.vp)
		}

		const closestMatrixPosition = this.matrixValueChooser.getClosestMatrixPosition(this.vp)

		const finalPosition = this.finalPositionFinder.findFinalPosition(closestMatrixPosition, this.vp)

		this.degreePositionChooser.setFinalDegrees(finalPosition, this.vp)
	}

	private getNextStep(
		minus: PositionPercent,
		plus: PositionPercent,
		direction: Direction
	): number {
		let percentChange = this.getPercentChange()
		let percentToChange
		switch (direction) {
			case -1:
				percentToChange = minus
				break
			case 1:
				percentToChange = plus
		}
		return Math.floor(percentToChange / percentChange) + 1
		// if (plus) {
		// 	return [Math.floor(plus / percentChange) + 1, direction]
		// } else if (minus) {
		// 	if (minus <= percentChange) {
		// 		return [0, direction]
		// 	}
		// } else {
		// 	return [1, direction]
		// }
	}

	private getPercentChange(): PercentChange {
		switch (this.vp.zm) {
			case 0:
				return 33
			case 1:
				return 20
			case 2:
				return 5
		}
	}

	private isChangeAllowed(
		direction: Direction,
		dimensionPercentages: IDimensionPercentages
	): boolean {
		let currentValue = direction === 1
			? dimensionPercentages.plus
			: dimensionPercentages.minus

		return currentValue !== 100
	}

	private getDirection(
		dimension: Dimension,
		aViewport: IViewport
	): Direction {
		let dimensionPercentages = aViewport.pp[dimension]
		if (dimensionPercentages.minus) {
			return -1
		}

		return 1
	}

}

export const mutationApi = new MutationApi(viewport)
