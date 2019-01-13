import {secondIsGreaterShortcircuit} from '../../utils/utils'
import {
	NUM_VALS,
	PositionValues,
	VALUE_MATRIX,
	ValueArrayPosition
}                                    from '../cubeMoveMatrix'
import {
	IDimensionPositionData,
	IPositionData
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
		const x = viewport.pd.x
		if (x.value === 100
			&& x.dir === -1) {

			return {
				// FIXME: errored out in this position
				// i: 30,
				// j: 36,
				i: 20,
				j: 36,
				values: VALUE_MATRIX[20][36]
			}
		}
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

		const newPositionData: IPositionData = viewport.pd

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

					const xDistance = this.getDimensionDistance(newPositionData.x,
						values, 0, 5, positionsWithZeroes)
					if (xDistance === undefined) {
						continue
					}

					const yDistance = this.getDimensionDistance(newPositionData.y,
						values, 1, 3, positionsWithZeroes)
					if (yDistance === undefined) {
						continue
					}

					const zDistance = this.getDimensionDistance(newPositionData.z,
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
		const positionData = viewport.pd

		const zeroedPositions: boolean[] = []

		this.setDimZeroPositions(positionData.x, 0, 5, zeroedPositions)
		this.setDimZeroPositions(positionData.y, 1, 3, zeroedPositions)
		this.setDimZeroPositions(positionData.z, 2, 4, zeroedPositions)

		return zeroedPositions
	}

	private setDimZeroPositions(
		dimensionPositionData: IDimensionPositionData,
		plusIndex: ValueArrayPosition,
		minusIndex: ValueArrayPosition,
		zeroedPositions: boolean[]
	) {
		if (dimensionPositionData.value) {
			if (dimensionPositionData.dir === 1) {
				zeroedPositions[minusIndex] = true
			} else {
				zeroedPositions[plusIndex] = true
			}
		} else {
			zeroedPositions[plusIndex]  = true
			zeroedPositions[minusIndex] = true
		}
	}

	private getDimensionDistance(
		newDimensionPositionData: IDimensionPositionData,
		positionData: PositionValues,
		positiveIndex: ValueArrayPosition,
		negativeIndex: ValueArrayPosition,
		positionsWithZeroes: boolean[]
	): DistanceFromClosestMatrixPosition | undefined {
		let positiveDistance  = 0
		const maximumDistance = MAX_DIST
		if (!positionsWithZeroes[positiveIndex]) {
			positiveDistance = Math.abs(positionData[positiveIndex]
				- newDimensionPositionData.value)
			if (positiveDistance > maximumDistance) {
				return undefined
			}
		}
		let negativeDistance = 0
		if (!positionsWithZeroes[negativeIndex]) {
			negativeDistance = Math.abs(positionData[negativeIndex]
				- newDimensionPositionData.value)
			if (negativeDistance > maximumDistance) {
				return undefined
			}
		}
		return (positiveDistance > negativeDistance
			? positiveDistance
			: negativeDistance) as DistanceFromClosestMatrixPosition
	}

}
