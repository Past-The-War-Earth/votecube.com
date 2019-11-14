import {
	container,
	DI
}                                   from '@airport/di'
import {
	Factor_Number,
	Outcome_Ordinal
}                                   from '@votecube/model'
import {
	CUBE_MOVE_MATRIX,
	CUBE_MOVEMENT,
	CUBE_UTILS,
	DEGREE_POSITION_CHOOSER,
	FINAL_POSITION_FINDER,
	MATRIX_VALUE_CHOOSER,
	MUTATION_API,
	PERCENTAGE_POSITION_CHOOSER,
	VIEWPORT
} from '../../diTokens'
import {
	Direction,
	PositionPercent
}                                   from '../CubeMovement'
import {
	Dimension,
	IViewport
}                                   from '../Viewport'
import {IPercentagePositionChooser} from './PercentagePositionChooser'
import {PercentChange}              from './types'

export interface IMutationApi {

	/*	changeZoom(
			zoomIndex: ZoomIndex
		): void*/

	move(
		factorNumber: Factor_Number,
		outcome: Outcome_Ordinal,
		percentChange: PercentChange
	): void

	moveToValue(
		factorNumber: Factor_Number,
		value: PositionPercent
	): Promise<void>

	recompute(): Promise<void>

	toggleSurface(
		factorNumber: Factor_Number
	): void

}

export class MutationApi
	implements IMutationApi {

	/*	changeZoom(
			zoomIndex: ZoomIndex
		): void {
			// this.vp.zm = zoomIndex
		}*/

	move(
		factorNumber: Factor_Number,
		outcome: Outcome_Ordinal,
		percentChange: PercentChange
	): void {
		container(this).get(
			PERCENTAGE_POSITION_CHOOSER, VIEWPORT).then((
			[percentagePositionChooser, viewport
			]) => {
			const dimension             = viewport.pd.factorToAxisMapping[factorNumber]
			const direction             = outcome === 'A' ? 1 : -1
			const dimensionPositionData = viewport.pd[dimension]
			if (dimensionPositionData.value === 100
				&& dimensionPositionData.dir === direction) {
				return
			}
			// let percentChange = this.getPercentChange()

			this.moveToPercent(dimension, null,
				percentagePositionChooser, viewport, percentChange, direction)
		})
	}

	async moveToValue(
		factorNumber: Factor_Number,
		value: PositionPercent
	): Promise<void> {
		const [percentagePositionChooser, viewport] = await container(this).get(
			PERCENTAGE_POSITION_CHOOSER, VIEWPORT)

		const dimension              = viewport.pd.factorToAxisMapping[factorNumber]
		const numericValue           = parseInt(value as any) as PositionPercent
		viewport.pd[dimension].valid = !isNaN(value) && numericValue >= 0 && numericValue <= 100
		if (!viewport.pd[dimension].valid) {
			viewport.cb(viewport.pd)
			return
		}
		this.moveToPercent(dimension, numericValue, percentagePositionChooser, viewport)
	}

	async toggleSurface(
		factorNumber: Factor_Number
	): Promise<void> {
		const viewport = await container(this).get(VIEWPORT)

		const dimension             = viewport.pd.factorToAxisMapping[factorNumber]
		const dimensionPositionData = viewport.pd[dimension]
		if (!dimensionPositionData.dir) {
			dimensionPositionData.dir = 1
		} else if (dimensionPositionData.value === 100) {
			dimensionPositionData.dir = -dimensionPositionData.dir as Direction
		}
		switch (dimension) {
			case 'x': {
				viewport.pd.y.dir = 0
				viewport.pd.z.dir = 0
				break
			}
			case 'y': {
				viewport.pd.x.dir = 0
				viewport.pd.z.dir = 0
				break
			}
			case 'z': {
				viewport.pd.x.dir = 0
				viewport.pd.y.dir = 0
				break
			}
		}
		this.moveToPercent(dimension, 100, null, null)
	}

	async recompute(): Promise<void> {
		const [cubeMoveMatrix, cubeMovement, cubeUtils, degreePositionChooser, finalPositionFinder,
			      matrixValueChooser, viewport] = await container(this).get(
			CUBE_MOVE_MATRIX, CUBE_MOVEMENT, CUBE_UTILS, DEGREE_POSITION_CHOOSER,
			FINAL_POSITION_FINDER, MATRIX_VALUE_CHOOSER, VIEWPORT)
		if (!viewport.pd) {
			return
		}
		const closestMatrixPosition = matrixValueChooser.getClosestMatrixPosition(
			viewport, cubeUtils, cubeMoveMatrix)

		const finalPosition = finalPositionFinder.findFinalPosition(
			closestMatrixPosition, viewport, cubeUtils, cubeMoveMatrix, cubeMovement)

		degreePositionChooser.setFinalDegrees(finalPosition, viewport)
	}

	private moveToPercent(
		dimension: Dimension,
		newPercent: PositionPercent,
		percentagePositionChooser: IPercentagePositionChooser,
		viewport: IViewport,
		percentChange?: PercentChange,
		direction?: Direction,
	): void {
		// First see the order of recently moved dimensions
		viewport.rmd = viewport.rmd.filter(
			changedDim => dimension !== changedDim)
		viewport.rmd.unshift(dimension)
		const numPreviousMoves = viewport.rmd.length
		if (numPreviousMoves > 3) {
			viewport.rmd.pop()
		}

		if (percentChange) {
			percentagePositionChooser.changePositionPercentages(
				dimension, percentChange, direction, viewport)
		} else {
			percentagePositionChooser.setPositionPercentages(
				dimension, newPercent, viewport.pd[dimension].dir, viewport)
		}

		this.recompute()
	}

	/*
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
*/

}

DI.set(MUTATION_API, MutationApi)
