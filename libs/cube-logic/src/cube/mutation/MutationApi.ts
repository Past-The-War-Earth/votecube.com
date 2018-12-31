import {ZoomIndex}                 from '../cubeMoveMatrix'
import {
	Direction,
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

	move(
		dimension: Dimension,
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

	move(
		dimension: Dimension,
		direction: Direction
	): void {
		const dimensionPercentages = this.vp.pp[dimension]
		if (dimensionPercentages.value === 100) {
			return
		}
		let percentChange = this.getPercentChange()

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
				dimension, newPercent, this.vp.pp[dimension].dir, this.vp)
		}

		const closestMatrixPosition = this.matrixValueChooser.getClosestMatrixPosition(this.vp)

		const finalPosition = this.finalPositionFinder.findFinalPosition(closestMatrixPosition, this.vp)

		this.degreePositionChooser.setFinalDegrees(finalPosition, this.vp)
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

}

export const mutationApi = new MutationApi(viewport)
