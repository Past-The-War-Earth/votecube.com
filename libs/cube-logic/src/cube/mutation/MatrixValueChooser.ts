import {secondInPairIsGreater} from '../../utils/utils'
import {
	NUM_VALS,
	PositionValues,
	VALUE_MATRICES,
	ValueArrayPosition
}                              from '../cubeMoveMatrix'
import {
	IDimensionPercentages,
	IPositionPercentages
}                              from '../cubeMovement'
import {IViewport}             from '../Viewport'
import {
	DistanceFromClosestMatrixPosition,
	DistanceFromClosestMatrixPositionMedian,
	DistanceFromClosestMatrixPositionSum,
	IMatrixPosition
}                              from './types'

const MAX_DIST = 12

/*
export interface IPositionWithDistance {
	dist: IDistanceToPosition
	position: IMatrixPosition
}

export interface IDistanceToPosition {
	median: DistanceFromClosestMatrixPositionMedian
	sum: DistanceFromClosestMatrixPositionSum
}
*/

export class MatrixValueChooser {

	getClosestMatrixPosition(
		viewport: IViewport
	): IMatrixPosition {
		const positionsWithZeroes  = this.getZeroedPositions(viewport)
		// let minimumDistanceMatches = this.getMinimumDistanceMatches(positionsWithZeroes, viewport)
		let matrixPosition = this.getClosestPositionByDistanceAndMedian(positionsWithZeroes, viewport)

		// let match                          = this.pickLowestFromDimensionOrder(minimumDistanceMatches[0])
		// let numberOfValuesInMatrixPosition = NUM_VALS
		// for (let k = 1; k < numberOfValuesInMatrixPosition; k++) {
		// 	let nextMatch = this.pickLowestFromDimensionOrder(minimumDistanceMatches[k])
		// 	if (secondInPairIsGreater([
		// 		[nextMatch.dist.sum, match.dist.sum],
		// 		[nextMatch.dist.median, match.dist.median]
		// 	])) {
		// 		match = nextMatch
		// 	}
		// }

		// let matrixPosition           = match.position
		// matrixPosition.zeroPos = positionsWithZeroes
		matrixPosition.numNonZeroPos = 0 as any
		for (let k = 0; k < NUM_VALS; k++) {
			if (!positionsWithZeroes[k]) {
				matrixPosition.numNonZeroPos++
			}
		}

		return matrixPosition
	}

	// private getMinimumDistanceMatches(
	private getClosestPositionByDistanceAndMedian(
		positionsWithZeroes: boolean[],
		viewport: IViewport
	): IMatrixPosition {
		// ): IMatrixPosition[][][][] {

		let minimumDistanceMatches: IMatrixPosition[][][][] = [
			[], [], [], [], [], []
		]

		// 5 5 90
		for (let c = 0; c < 6; c++) {
			let minDistMatchCombination = minimumDistanceMatches[c]
			for (let a = 0; a <= MAX_DIST; a++) {
				minDistMatchCombination[a] = [[], [], [], [], [], [], [], [], [], [], [], [], []]
			}
		}

		// need to find the percentages that best endPoint the specified ones
		const valueMatrix = VALUE_MATRICES[2]

		const newPositionPercentages: IPositionPercentages = viewport.pp

		let lowestMedian = 33;
		let lowestSum = 100;
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

					let median = [xDistance, yDistance, zDistance].sort()[1]
					let sum    = xDistance + yDistance + zDistance
					if (secondInPairIsGreater([
						[sum, lowestSum],
						[median, lowestMedian]
					])) {
						lowestMedian = median as DistanceFromClosestMatrixPositionMedian
						lowestSum    = sum as DistanceFromClosestMatrixPositionSum
						position    = {
							i,
							j,
							values
						}
					}
					/*					minimumDistanceMatches[0][xDistance][yDistance][zDistance] = {
											i,
											j,
											values
										}
										minimumDistanceMatches[1][xDistance][zDistance][yDistance] = {
											i,
											j,
											values
										}
										minimumDistanceMatches[2][yDistance][xDistance][zDistance] = {
											i,
											j,
											values
										}
										minimumDistanceMatches[3][yDistance][zDistance][xDistance] = {
											i,
											j,
											values
										}
										minimumDistanceMatches[4][zDistance][xDistance][yDistance] = {
											i,
											j,
											values
										}
										minimumDistanceMatches[5][zDistance][yDistance][xDistance] = {
											i,
											j,
											values
										}*/
				}
		}

		// return minimumDistanceMatches
		return position
	}

	private getZeroedPositions(
		viewport: IViewport
	): boolean[] {
		let positionPercentages = viewport.pp

		const zeroedPositions: boolean[] = []
		if (!positionPercentages.x.plus) {
			zeroedPositions[0] = true
		}
		if (!positionPercentages.x.minus) {
			zeroedPositions[5] = true
		}
		if (!positionPercentages.y.plus) {
			zeroedPositions[1] = true
		}
		if (!positionPercentages.y.minus) {
			zeroedPositions[3] = true
		}
		if (!positionPercentages.z.plus) {
			zeroedPositions[2] = true
		}
		if (!positionPercentages.z.minus) {
			zeroedPositions[4] = true
		}

		return zeroedPositions
	}

	private getDimensionDistance(
		newDimensionPercentages: IDimensionPercentages,
		positionPercentages: PositionValues,
		positiveIndex: ValueArrayPosition,
		negativeIndex: ValueArrayPosition,
		positionsWithZeroes: boolean[]
	): DistanceFromClosestMatrixPosition | undefined {
		let positiveDistance = 0
		if (!positionsWithZeroes[positiveIndex]) {
			positiveDistance = Math.abs(positionPercentages[positiveIndex]
				- newDimensionPercentages.plus)
			if (positiveDistance > MAX_DIST) {
				return undefined
			}
		}
		let negativeDistance = 0
		if (!positionsWithZeroes[negativeIndex]) {
			negativeDistance = Math.abs(positionPercentages[negativeIndex]
				- newDimensionPercentages.minus)
			if (negativeDistance > MAX_DIST) {
				return undefined
			}
		}
		return (positiveDistance > negativeDistance
			? positiveDistance
			: negativeDistance) as DistanceFromClosestMatrixPosition
	}

	/*
		private pickLowestFromDimensionOrder(
			minimumDistanceMatches: IMatrixPosition[][][]
		): IPositionWithDistance {
			let position: IMatrixPosition
			let median: DistanceFromClosestMatrixPositionMedian = 12
			let sum: DistanceFromClosestMatrixPositionSum       = 36
			let i: DistanceFromClosestMatrixPosition | -1       = -1
			while (!position) {
				i++
				const secondDimensionArray               = minimumDistanceMatches[i]
				let thirdDimensionArray
				let j: DistanceFromClosestMatrixPosition = 0
				let foundValue                           = false
				for (; j <= MAX_DIST; j++) {
					thirdDimensionArray = secondDimensionArray[j]
					if (thirdDimensionArray && thirdDimensionArray.length) {
						foundValue = true
						break
					}
				}
				if (!foundValue) {
					continue
				}
				foundValue                               = false
				let k: DistanceFromClosestMatrixPosition = 0
				for (; k <= MAX_DIST; k++) {
					if (thirdDimensionArray[k]) {
						foundValue = true
						break
					}
				}
				if (!foundValue) {
					continue
				}
				median   = [i, j, k].sort()[1] as DistanceFromClosestMatrixPositionMedian
				sum      = i + j + k as DistanceFromClosestMatrixPositionSum
				position = minimumDistanceMatches[i][j][k]
			}

			return {
				dist: {
					median,
					sum
				},
				position
			}
		}
		*/

}
