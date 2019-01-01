import {
	Direction,
	IPositionPercentages,
	PositionPercent
}                      from '../cubeMovement'
import {
	Dimension,
	IViewport
}                      from '../Viewport'
import {PercentChange} from './types'

export class PercentagePositionChooser {

	setPositionPercentages(
		dimension: Dimension,
		percent: PositionPercent,
		direction: Direction,
		viewport: IViewport
	): void {
		let positionPercentages              = viewport.pp
		positionPercentages[dimension].value = percent
		positionPercentages[dimension].dir   = direction

		this.adjustDimensions(dimension, viewport)
	}

	changePositionPercentages(
		dimension: Dimension,
		percentChange: PercentChange,
		direction: Direction,
		viewport: IViewport
	) {
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
		const dimensionPercentages = viewport.pp[dimension]

		if (dimensionPercentages.dir !== direction) {
			const existingValueToDecrease = dimensionPercentages.value
			const decreasedValue          = existingValueToDecrease - percentChange as PositionPercent
			if (decreasedValue > 0) {
				dimensionPercentages.value = decreasedValue
			} else if (decreasedValue === 0) {
				dimensionPercentages.value = 0
				dimensionPercentages.dir   = 1
			} else {
				dimensionPercentages.value = -decreasedValue as PositionPercent
				dimensionPercentages.dir   = direction
			}
		} else if (!dimensionPercentages.value) {
			dimensionPercentages.value = percentChange
		} else {
			// No decrease is necessary, user is clicking on a button
			// that has a value associated with it
			const increasedValue = dimensionPercentages.value + percentChange as PositionPercent
			if (increasedValue < 100) {
				dimensionPercentages.value = increasedValue
			} else {
				dimensionPercentages.value = 100
			}
		}
	}

	private adjustDimensions(
		dimension: Dimension,
		viewport: IViewport,
	): void {
		const positionPercentages      = viewport.pp
		const newChangedDimensionValue = viewport.pp[dimension].value
		let i                          = -1
		let dimensionToPreserve        = this.getDimensionToPreserve(dimension, viewport)
		let dimensionToMove            = this.getDimensionToMove(dimension, dimensionToPreserve)
		let otherDimensions            = [dimensionToMove, dimensionToPreserve]
		let otherDimensionValues, totalValue
		do {
			otherDimensionValues = [
				viewport.pp[dimensionToMove].value,
				viewport.pp[dimensionToPreserve].value
			]

			totalValue = newChangedDimensionValue + otherDimensionValues[0] + otherDimensionValues[1]
			if (totalValue === 100) {
				return
			}
			i++
		} while (this.adjustDimension(
			positionPercentages,
			otherDimensions[i],
			otherDimensionValues[i],
			totalValue))

	}

	private adjustDimension(
		positionPercentages: IPositionPercentages,
		dimension: Dimension,
		currentDimensionValue: number,
		totalValue: number
	): boolean {
		const dimensionPercentages = positionPercentages[dimension]
		if (totalValue > 100) {
			const reduceBy = totalValue - 100
			if (currentDimensionValue >= reduceBy) {
				dimensionPercentages.value -= reduceBy

				return false
			}
			dimensionPercentages.value = 0

			return true
		}
		// total value < 100
		const increaseBy = 100 - totalValue

		if (currentDimensionValue + increaseBy <= 100) {
			dimensionPercentages.value += increaseBy

			return false
		}

		dimensionPercentages.value = 100

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
