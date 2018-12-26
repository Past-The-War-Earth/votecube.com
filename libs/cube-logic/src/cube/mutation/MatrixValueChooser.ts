import {
	NUM_VALS,
	PositionValues,
	VALUE_MATRICES,
	ValueArrayPosition
}                  from '../cubeMoveMatrix'
import {
	IDimensionPercentages,
	IPositionPercentages
}                  from '../cubeMovement'
import {IViewport} from '../Viewport'
import {
	DistanceFromClosestMatrixPosition,
	IMatrixPosition
}                  from './types'

const MAX_DIST = 12

export class MatrixValueChooser {

	getClosestMatrixPosition(
		viewport: IViewport
	): IMatrixPosition {
		let minimumDistanceMatches = this.getMinimumDistanceMatches(viewport)

		let match = this.pickLowestFromDimensionOrder(minimumDistanceMatches[0])
		for (let i = 1; i < NUM_VALS; i++) {
			let nextMatch = this.pickLowestFromDimensionOrder(minimumDistanceMatches[i])
			if (match.dist > nextMatch.dist) {
				match = nextMatch
			}
		}

		return match.mPos
	}

	private getMinimumDistanceMatches(
		viewport: IViewport
	): IMatrixPosition[][][][] {
		const positionsWithZeroes = this.getZeroedPositions(viewport)

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

		// need to find the percentages that best match the specified ones
		const valueMatrix = VALUE_MATRICES[2]

		const newPositionPercentages: IPositionPercentages = viewport.pp

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

					minimumDistanceMatches[0][xDistance][yDistance][zDistance] = {
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
					}
				}
		}

		return minimumDistanceMatches
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

	private pickLowestFromDimensionOrder(
		minimumDistanceMatches: IMatrixPosition[][][]
	): {
		dist: DistanceFromClosestMatrixPosition
		mPos: IMatrixPosition
	} {
		let mPos: IMatrixPosition
		let dist: DistanceFromClosestMatrixPosition
		let i: DistanceFromClosestMatrixPosition | -1 = -1
		while (!mPos) {
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
			dist = (i > j
				? (i > k
					? i
					: k)
				: (j > k
					? j
					: k)) as DistanceFromClosestMatrixPosition
			mPos = minimumDistanceMatches[i][j][k]
		}

		return {
			dist,
			mPos
		}
	}
}
