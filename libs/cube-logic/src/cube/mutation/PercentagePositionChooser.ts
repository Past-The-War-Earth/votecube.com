import {
	Direction,
	PositionPercent,
	IPositionPercentages
}                      from '../cubeMovement'
import {
	Dimension,
	DimensionDirection,
	Viewport
}                      from '../Viewport'
import {PercentChange} from './types'

export interface IPositionsToChange {
	inc: DimensionDirection
	dec: DimensionDirection
}

export class PercentagePositionChooser {

	setPositionPercentages(
		dimension: Dimension,
		percent: PositionPercent,
		direction: Direction,
		viewport: Viewport
	): void {
		const positionsToChange = this.getPositionsToChange(direction)

		let positionPercentages                            = viewport.pp
		positionPercentages[dimension][positionsToChange.inc]  = percent
		positionPercentages[dimension][positionsToChange.dec] = 0

		this.adjustDimensions(dimension, viewport)
	}

	changePositionPercentages(
		dimension: Dimension,
		percentChange: PercentChange,
		direction: Direction,
		viewport: Viewport
	) {
		this.updateDimensionPercentages(
			dimension,
			percentChange,
			direction,
			viewport
		)
		this.adjustDimensions(dimension, viewport)
	}

	private updateDimensionPercentages(
		dimension: Dimension,
		percentChange: PercentChange,
		direction: Direction,
		viewport: Viewport
	): void {
		const positionsToChange = this.getPositionsToChange(direction)

		const positionPercentages     = viewport.pp
		const existingValueToIncrease = positionPercentages[dimension][positionsToChange.inc]
		const existingValueToDecrease = positionPercentages[dimension][positionsToChange.dec]

		// let decrease, increase
		if (existingValueToIncrease === 0) {
			if (existingValueToDecrease > 0) {
				const decreasedValue = existingValueToDecrease - percentChange as PositionPercent
				if (decreasedValue >= 0) {
					// decrease = percentChange
					// increase = 0
					positionPercentages[dimension][positionsToChange.dec] = decreasedValue
				} else {
					const decrease                                        = percentChange - existingValueToDecrease
					const increase                                        = percentChange - decrease as PositionPercent
					positionPercentages[dimension][positionsToChange.inc] = increase
					positionPercentages[dimension][positionsToChange.dec] = 0
				}
			} else {
				// decrease = 0
				// increase = percentChange
				positionPercentages[dimension][positionsToChange.inc] = percentChange
			}
		} else {
			// No decrease is necessary, user is clicking on a button
			// that has a value associated with it
			// decrease = 0
			const increasedValue = existingValueToIncrease + percentChange as PositionPercent
			if (increasedValue <= 100) {
				// increase = percentChange
				positionPercentages[dimension][positionsToChange.inc] = increasedValue
			} else {
				// increase = 100 - existingValueToIncrease
				positionPercentages[dimension][positionsToChange.inc] = 100
			}
		}
	}

	private adjustDimensions(
		dimension: Dimension,
		viewport: Viewport,
	): void {
		const positionPercentages      = viewport.pp
		const newChangedDimensionValue = this.getDimensionValue(dimension, viewport)
		let i                          = -1
		let dimensionToPreserve        = this.getDimensionToPreserve(dimension, viewport)
		let dimensionToMove            = this.getDimensionToMove(dimension, dimensionToPreserve)
		let otherDimensions            = [dimensionToMove, dimensionToPreserve]
		let otherDimensionValues, totalValue
		do {
			otherDimensionValues = [
				this.getDimensionValue(dimensionToMove, viewport),
				this.getDimensionValue(dimensionToPreserve, viewport)
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
		if (totalValue > 100) {
			const reduceBy = totalValue - 100
			if (currentDimensionValue >= reduceBy) {
				if (positionPercentages[dimension].minus) {
					positionPercentages[dimension].minus -= reduceBy
				} else {
					positionPercentages[dimension].plus -= reduceBy
				}
				return false
			}
			positionPercentages[dimension].minus = 0
			positionPercentages[dimension].plus  = 0
			return true
		}
		// total value < 100
		const increaseBy = 100 - totalValue

		if (currentDimensionValue + increaseBy <= 100) {
			if (positionPercentages[dimension].minus) {
				positionPercentages[dimension].minus += increaseBy
			} else {
				positionPercentages[dimension].plus += increaseBy
			}
			return false
		}

		if (positionPercentages[dimension].minus) {
			positionPercentages[dimension].minus = 100
		} else {
			positionPercentages[dimension].plus = 100
		}
		return true
	}

	private getDimensionValue(
		dimension: Dimension,
		viewport: Viewport
	) {
		const positionPercentages = viewport.pp

		return positionPercentages[dimension].minus + positionPercentages[dimension].plus
	}

	private getDimensionToPreserve(
		dimension: Dimension,
		viewport: Viewport
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

	private getPositionsToChange(
		direction: Direction
	): IPositionsToChange {
		switch (direction) {
			case 1:
				return {
					dec: 'minus',
					inc: 'plus'
				}
			case -1:
				return {
					dec: 'plus',
					inc: 'minus'
				}
		}
	}

}
