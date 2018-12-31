import {secondIsGreaterShortcircuit} from '../../utils/utils'
import {
	NUM_VALS,
	PositionValues,
	VALUE_MATRIX,
	ValueArrayPosition
}                                    from '../cubeMoveMatrix'
import {
	IDimensionPercentages,
	IPositionPercentages
}                                    from '../cubeMovement'
import {IViewport}                   from '../Viewport'
import {
	DistanceFromClosestMatrixPosition,
	IMatrixPosition
}                                    from './types'

const MAX_DIST = 12

export class MatrixValueChooser {

	getClosestMatrixPosition(
		viewport: IViewport
	): IMatrixPosition {
		const positionsWithZeroes = this.getZeroedPositions(viewport)
		let matrixPosition        = this.getClosestPositionByDistanceAndMedian(positionsWithZeroes, viewport)

		matrixPosition.numNonZeroPos = 0 as any
		for (let k = 0; k < NUM_VALS; k++) {
			if (!positionsWithZeroes[k]) {
				matrixPosition.numNonZeroPos++
			}
		}

		return matrixPosition
	}

	private getClosestPositionByDistanceAndMedian(
		positionsWithZeroes: boolean[],
		viewport: IViewport
	): IMatrixPosition {
		// need to find the percentages that best endPoint the specified ones
		const valueMatrix = VALUE_MATRIX

		const newPositionPercentages: IPositionPercentages = viewport.pp

		let lowestLargest       = 50
		let lowestMedian        = 33
		let lowestSum           = 100
		let currentlyUpsideDown = 1
		let position: IMatrixPosition

		for (let i = 0; i < valueMatrix.length; i++) {
			const dimensionMatrix = valueMatrix[i]
			value_loop:
				for (let j = 0; j < dimensionMatrix.length; j++) {
					const values = dimensionMatrix[j]
					for (let k = 0; k < NUM_VALS; k++) {
						if (positionsWithZeroes[k]) {
							if (values[k]) {
								continue value_loop
							}
						} else {
							if (!values[k]) {
								continue value_loop
							}
						}
					}

					const xDistance = this.getDimensionDistance(newPositionPercentages.x,
						values, 0, 5, positionsWithZeroes)
					if (xDistance === undefined) {
						continue
					}

					const yDistance = this.getDimensionDistance(newPositionPercentages.y,
						values, 1, 3, positionsWithZeroes)
					if (yDistance === undefined) {
						continue
					}

					const zDistance = this.getDimensionDistance(newPositionPercentages.z,
						values, 2, 4, positionsWithZeroes)
					if (zDistance === undefined) {
						continue
					}

					const sortedValues = [xDistance, yDistance, zDistance].sort()
					const median       = sortedValues[1]
					const largest      = sortedValues[2]
					const sum          = xDistance + yDistance + zDistance
					const upsideDown   = i > 18 && i < 54 ? 1 : 0
					if (secondIsGreaterShortcircuit([
						[sum, lowestSum],
						[median, lowestMedian],
						[largest, lowestLargest],
						[upsideDown, currentlyUpsideDown]
					])) {
						lowestLargest       = largest
						lowestMedian        = median
						lowestSum           = sum
						currentlyUpsideDown = upsideDown
						position            = {
							i,
							j,
							values
						}
					}
				}
		}

		return position
	}

	private getZeroedPositions(
		viewport: IViewport
	): boolean[] {
		const positionPercentages = viewport.pp

		const zeroedPositions: boolean[] = []

		this.setDimZeroPositions(positionPercentages.x, 0, 5, zeroedPositions)
		this.setDimZeroPositions(positionPercentages.y, 1, 3, zeroedPositions)
		this.setDimZeroPositions(positionPercentages.z, 2, 4, zeroedPositions)

		return zeroedPositions
	}

	private setDimZeroPositions(
		dimensionPercentages: IDimensionPercentages,
		plusIndex: ValueArrayPosition,
		minusIndex: ValueArrayPosition,
		zeroedPositions: boolean[]
	) {
		if (dimensionPercentages.value) {
			if (dimensionPercentages.dir === 1) {
				zeroedPositions[5] = true
			} else {
				zeroedPositions[0] = true
			}
		} else {
			zeroedPositions[0] = true
			zeroedPositions[5] = true
		}
	}

	private getDimensionDistance(
		newDimensionPercentages: IDimensionPercentages,
		positionPercentages: PositionValues,
		positiveIndex: ValueArrayPosition,
		negativeIndex: ValueArrayPosition,
		positionsWithZeroes: boolean[]
	): DistanceFromClosestMatrixPosition | undefined {
		let positiveDistance  = 0
		const maximumDistance = MAX_DIST
		if (!positionsWithZeroes[positiveIndex]) {
			positiveDistance = Math.abs(positionPercentages[positiveIndex]
				- newDimensionPercentages.value)
			if (positiveDistance > maximumDistance) {
				return undefined
			}
		}
		let negativeDistance = 0
		if (!positionsWithZeroes[negativeIndex]) {
			negativeDistance = Math.abs(positionPercentages[negativeIndex]
				- newDimensionPercentages.value)
			if (negativeDistance > maximumDistance) {
				return undefined
			}
		}
		return (positiveDistance > negativeDistance
			? positiveDistance
			: negativeDistance) as DistanceFromClosestMatrixPosition
	}

}
