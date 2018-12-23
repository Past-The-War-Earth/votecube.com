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
	DistanceFromMatrixPosition,
	IMatrixPosition
}                  from './types'

const MAX_DIST = 5

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
		const zeroedPositions = this.getZeroedPositions(viewport)

		let xYZMinimumDistanceMatches: IMatrixPosition[][][] = [
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []]
		]
		let xZYMinimumDistanceMatches: IMatrixPosition[][][] = [
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []]
		]
		let yXZMinimumDistanceMatches: IMatrixPosition[][][] = [
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []]
		]
		let yZXMinimumDistanceMatches: IMatrixPosition[][][] = [
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []]
		]
		let zXYMinimumDistanceMatches: IMatrixPosition[][][] = [
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []]
		]
		let zYXMinimumDistanceMatches: IMatrixPosition[][][] = [
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []],
			[[], [], [], [], [], []]
		]

		// need to find the percentages that best match the specified ones
		const valueMatrix = VALUE_MATRICES[2]

		let positionsWithZeroes: boolean[] = []
		zeroedPositions.forEach(
			position => positionsWithZeroes[position] = true)

		const newPositionPercentages: IPositionPercentages = viewport.pp

		for (let i = 0; i < valueMatrix.length; i++) {
			const dimensionMatrix = valueMatrix[i]
			value_loop:
				for (let j = 0; j < dimensionMatrix.length; j++) {
					const values = dimensionMatrix[j]
					for (let zeroedPosition of zeroedPositions) {
						if (values[zeroedPosition]) {
							continue value_loop
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

					xYZMinimumDistanceMatches[xDistance][yDistance][zDistance] = {
						i,
						j,
						values
					}
					yXZMinimumDistanceMatches[yDistance][xDistance][zDistance] = {
						i,
						j,
						values
					}
					xZYMinimumDistanceMatches[xDistance][zDistance][yDistance] = {
						i,
						j,
						values
					}
					yZXMinimumDistanceMatches[yDistance][zDistance][xDistance] = {
						i,
						j,
						values
					}
					zXYMinimumDistanceMatches[zDistance][xDistance][yDistance] = {
						i,
						j,
						values
					}
					zYXMinimumDistanceMatches[zDistance][yDistance][xDistance] = {
						i,
						j,
						values
					}
				}
		}

		return [
			xYZMinimumDistanceMatches,
			xZYMinimumDistanceMatches,
			yXZMinimumDistanceMatches,
			yZXMinimumDistanceMatches,
			zXYMinimumDistanceMatches,
			zYXMinimumDistanceMatches
		]
	}

	private getZeroedPositions(
		viewport: IViewport
	): ValueArrayPosition[] {
		let positionPercentages = viewport.pp

		const zeroedPositions: ValueArrayPosition[] = []
		if (!positionPercentages.x.plus) {
			zeroedPositions.push(0)
		}
		if (!positionPercentages.x.minus) {
			zeroedPositions.push(5)
		}
		if (!positionPercentages.y.plus) {
			zeroedPositions.push(1)
		}
		if (!positionPercentages.y.minus) {
			zeroedPositions.push(3)
		}
		if (!positionPercentages.z.plus) {
			zeroedPositions.push(2)
		}
		if (!positionPercentages.z.minus) {
			zeroedPositions.push(4)
		}

		return zeroedPositions
	}

	private getDimensionDistance(
		newDimensionPercentages: IDimensionPercentages,
		positionPercentages: PositionValues,
		positiveIndex: ValueArrayPosition,
		negativeIndex: ValueArrayPosition,
		positionsWithZeroes: boolean[]
	): DistanceFromMatrixPosition | undefined {
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
			: negativeDistance) as DistanceFromMatrixPosition
	}

	private pickLowestFromDimensionOrder(
		minimumDistanceMatches: IMatrixPosition[][][]
	): {
		dist: DistanceFromMatrixPosition
		mPos: IMatrixPosition
	} {
		let mPos: IMatrixPosition
		let dist: DistanceFromMatrixPosition
		let i: DistanceFromMatrixPosition | -1 = -1
		while (!mPos) {
			i++
			const secondDimensionArray        = minimumDistanceMatches[i]
			let thirdDimensionArray
			let j: DistanceFromMatrixPosition = 0
			let foundValue                    = false
			for (; j < MAX_DIST; j++) {
				thirdDimensionArray = secondDimensionArray[j]
				if (thirdDimensionArray && thirdDimensionArray.length) {
					foundValue = true
					break
				}
			}
			if (!foundValue) {
				continue
			}
			foundValue                        = false
			let k: DistanceFromMatrixPosition = 0
			for (; k < MAX_DIST; k++) {
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
					: k)) as DistanceFromMatrixPosition
			mPos = minimumDistanceMatches[i][j][k]
		}

		return {
			dist,
			mPos
		}
	}
}
