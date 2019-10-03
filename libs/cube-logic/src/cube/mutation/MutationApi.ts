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

	move(
		dimension: Dimension,
		direction: Direction,
		percentChange: PercentChange
	): void

	moveToValue(
		dimension: Dimension,
		value: string
	): void

	recompute(): void

	toggleSurface(
		dimension: Dimension
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
		// this.vp.zm = zoomIndex
	}

	move(
		dimension: Dimension,
		direction: Direction,
		percentChange: PercentChange
	): void {
		const dimensionPositionData = this.vp.pd[dimension]
		if (dimensionPositionData.value === 100
			&& dimensionPositionData.dir === direction) {
			return
		}
		// let percentChange = this.getPercentChange()

		this.moveToPercent(dimension, null, percentChange, direction)
	}

	moveToValue(
		dimension: Dimension,
		value: any
	): void {
		const numericValue          = parseInt(value) as PositionPercent
		this.vp.pd[dimension].valid = !isNaN(value) && numericValue >= 0 && numericValue <= 100
		if (!this.vp.pd[dimension].valid) {
			this.vp.cb(this.vp.pd)
			return
		}
		this.moveToPercent(dimension, numericValue)
	}

	toggleSurface(
		dimension: Dimension
	): void {
		const dimensionPositionData = this.vp.pd[dimension]
		if (!dimensionPositionData.dir) {
			dimensionPositionData.dir = 1
		} else if (dimensionPositionData.value === 100) {
			dimensionPositionData.dir = -dimensionPositionData.dir as Direction
		}
		switch (dimension) {
			case 'x': {
				this.vp.pd.y.dir = 0
				this.vp.pd.z.dir = 0
				break
			}
			case 'y': {
				this.vp.pd.x.dir = 0
				this.vp.pd.z.dir = 0
				break
			}
			case 'z': {
				this.vp.pd.x.dir = 0
				this.vp.pd.y.dir = 0
				break
			}
		}
		this.moveToPercent(dimension, 100, null, null)
	}

	recompute(): void {
		const closestMatrixPosition = this.matrixValueChooser.getClosestMatrixPosition(this.vp)

		const finalPosition = this.finalPositionFinder.findFinalPosition(closestMatrixPosition, this.vp)

		this.degreePositionChooser.setFinalDegrees(finalPosition, this.vp)
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
		const numPreviousMoves = this.vp.rmd.length
		if (numPreviousMoves > 3) {
			this.vp.rmd.pop()
		}

		if (percentChange) {
			this.percentagePositionChooser.changePositionPercentages(
				dimension, percentChange, direction, this.vp)
		} else {
			this.percentagePositionChooser.setPositionPercentages(
				dimension, newPercent, this.vp.pd[dimension].dir, this.vp)
		}

		this.recompute()
	}

	private getPercentChange(): PercentChange {
		// switch (this.vp.zm) {
		// 	case 0:
		// 		return 33
		// 	case 1:
		// 		return 20
		// 	case 2:
		return 5
		// }
	}

}

export const mutationApi = new MutationApi(viewport)
