import {DI}            from '@airport/di'
import {
	DEGREE_POSITION_CHOOSER,
	PERCENTAGE_POSITION_CHOOSER
}                      from '../../diTokens'
import {
	Direction,
	IUiVote,
	PositionPercent
}                      from '../CubeMovement'
import {
	Dimension,
	IViewport
}                      from '../Viewport'
import {PercentChange} from './types'

export interface IPercentagePositionChooser {


	changePositionPercentages(
		dimension: Dimension,
		percentChange: PercentChange,
		direction: Direction,
		viewport: IViewport
	): void

	setPositionPercentages(
		dimension: Dimension,
		percent: PositionPercent,
		direction: Direction,
		viewport: IViewport
	): void

}

export class PercentagePositionChooser
	implements IPercentagePositionChooser {

	setPositionPercentages(
		dimension: Dimension,
		percent: PositionPercent,
		direction: Direction,
		viewport: IViewport
	): void {
		const positionData = viewport.pd
		if (percent && !direction) {
			direction = 1
		} else if (direction && !percent) {
			direction = 0
		}
		positionData[dimension].value = percent
		positionData[dimension].dir   = direction

		this.adjustDimensions(dimension, viewport)
	}

	changePositionPercentages(
		dimension: Dimension,
		percentChange: PercentChange,
		direction: Direction,
		viewport: IViewport
	): void {
		this.updateDimensionPercent(
			dimension,
			percentChange,
			direction,
			viewport
		)
		this.adjustDimensions(dimension, viewport)
	}

	private updateDimensionPercent(
		dimension: Dimension,
		percentChange: PercentChange,
		direction: Direction,
		viewport: IViewport
	): void {
		const dimensionPositionData = viewport.pd[dimension]

		if (dimensionPositionData.dir !== direction) {
			const existingValueToDecrease = dimensionPositionData.value
			const decreasedValue          = existingValueToDecrease - percentChange as PositionPercent
			if (decreasedValue > 0) {
				dimensionPositionData.value = decreasedValue
			} else if (decreasedValue === 0) {
				dimensionPositionData.value = 0
				dimensionPositionData.dir   = 0
			} else {
				dimensionPositionData.value = -decreasedValue as PositionPercent
				dimensionPositionData.dir   = direction
			}
		} else if (!dimensionPositionData.value) {
			dimensionPositionData.value = percentChange
		} else {
			// No decrease is necessary, user is clicking on a button
			// that has a value associated with it
			const increasedValue = dimensionPositionData.value + percentChange as PositionPercent
			if (increasedValue < 100) {
				dimensionPositionData.value = increasedValue
			} else {
				dimensionPositionData.value = 100
			}
		}
	}

	private adjustDimensions(
		dimension: Dimension,
		viewport: IViewport,
	): void {
		const positionData             = viewport.pd
		const newChangedDimensionValue = viewport.pd[dimension].value
		let i                          = -1
		const dimensionToPreserve      = this.getDimensionToPreserve(dimension, viewport)
		const dimensionToMove          = this.getDimensionToMove(dimension, dimensionToPreserve)
		const otherDimensions          = [dimensionToMove, dimensionToPreserve]
		let otherDimensionValues
		let totalValue
		do {
			otherDimensionValues = [
				viewport.pd[dimensionToMove].value,
				viewport.pd[dimensionToPreserve].value
			]

			totalValue = newChangedDimensionValue + otherDimensionValues[0] + otherDimensionValues[1]
			if (totalValue === 100) {
				return
			}
			i++
		} while (this.adjustDimension(
			positionData,
			otherDimensions[i],
			otherDimensionValues[i],
			totalValue))

	}

	private adjustDimension(
		positionData: IUiVote,
		dimension: Dimension,
		currentDimensionValue: number,
		totalValue: number
	): boolean {
		const dimensionPositionData = positionData[dimension]
		if (totalValue > 100) {
			const reduceBy = totalValue - 100
			if (currentDimensionValue >= reduceBy) {
				dimensionPositionData.value -= reduceBy

				return false
			}
			dimensionPositionData.value = 0
			dimensionPositionData.dir   = 0

			return true
		}
		// total value < 100
		const increaseBy = 100 - totalValue

		if (!dimensionPositionData.dir) {
			dimensionPositionData.dir = 1
		}

		if (currentDimensionValue + increaseBy <= 100) {
			dimensionPositionData.value += increaseBy

			return false
		}

		dimensionPositionData.value = 100

		return true
	}

	private getDimensionToPreserve(
		dimension: Dimension,
		viewport: IViewport
	): Dimension {
		if (viewport.rmd.length > 1) {
			return viewport.rmd[1]
		}

		// If the order between the dimensions is the same, use the top-to-bottom
		// order of the displayed controls
		// 1) 0-5 - x
		// 2) 2-4 - z
		// 3) 1-3 - y
		switch (dimension) {
			case 'x':
				return 'z'
			case 'y':
			case 'z':
				return 'x'
		}
	}

	private getDimensionToMove(
		changedDimension: Dimension,
		dimensionToPreserve: Dimension
	): Dimension {
		switch (changedDimension) {
			case 'x':
				switch (dimensionToPreserve) {
					case 'y':
						return 'z'
					case 'z':
						return 'y'
				}
			case 'y':
				switch (dimensionToPreserve) {
					case 'x':
						return 'z'
					case 'z':
						return 'x'
				}
			case 'z':
				switch (dimensionToPreserve) {
					case 'x':
						return 'y'
					case 'y':
						return 'x'
				}
		}
	}

}

DI.set(PERCENTAGE_POSITION_CHOOSER, PercentagePositionChooser)
