import {
	MatrixIndex,
	NUM_DIVS,
	NUM_VALS,
	PositionValues,
	STEP_DEGS,
	VALUE_MATRICES,
	ValueArrayPosition
}                  from '../cubeMoveMatrix'
import {
	Direction,
	normMatrixIdx
}                  from '../cubeMovement'
import {IViewport} from '../Viewport'
import {
	DistanceFromClosestMatrixPosition,
	IFinalPosition,
	IMatrixPosition,
	PositionAlignmentScore
}                  from './types'

export interface INeighborDistance {
	valueDists: DistanceFromClosestMatrixPosition[],
	dist: DistanceFromClosestMatrixPosition,
	maxDistIndex: ValueArrayPosition
}

export interface IMatrixPositionMatch {
	alignScore: PositionAlignmentScore,
	dist: DistanceFromClosestMatrixPosition
	dimDists: DistanceFromClosestMatrixPosition[]
	i: Direction
	j: Direction
	moves: 1 | 2
}

export interface IMinDistForPosition {
	exactMatches: Map<string, IMatrixPosition>
	minDist: IMatrixPositionMatch
}

export interface IDistancePositions {
	minDist: IMatrixPositionMatch
	neighborDists: INeighborDistance[][]
}

export type NumberOfDimensionShifts = 1 | 2

export class FinalPositionFinder {

	findFinalPosition(
		closestMatrixPosition: IMatrixPosition,
		viewport: IViewport
	): IFinalPosition {
		let positionPercentages         = viewport.pp
		let newPosition: PositionValues = [
			positionPercentages.x.plus,
			positionPercentages.y.plus,
			positionPercentages.z.plus,
			positionPercentages.y.minus,
			positionPercentages.z.minus,
			positionPercentages.x.minus,
		]
		const matrixStepDegrees         = STEP_DEGS
		if (this.matrixPositionsMatch(closestMatrixPosition.values, newPosition)) {
			return {
				x: closestMatrixPosition.i * matrixStepDegrees,
				y: closestMatrixPosition.j * matrixStepDegrees
			}
		}

		let minDistForPosition: IMinDistForPosition = {
			exactMatches: new Map(),
			minDist: {
				alignScore: -1,
				dist: 100
			}
		} as any
		closestMatrixPosition                       = this.findMinimumDistance(
			{}, newPosition, closestMatrixPosition, minDistForPosition)
		let minDist                                 = minDistForPosition.minDist
		// If the difference is in one dimension
		// if (!minDist.i || !minDist.j) {
		// 	return this.get1DOffsetFinalPosition(newPosition, closestMatrixPosition, minDist)
		// } else {
		return this.get2DOffsetFinalPosition(newPosition, closestMatrixPosition, minDist)
		// }
	}

	private findMinimumDistance(
		processedMatches: { [key: string]: IDistancePositions },
		newPosition: PositionValues,
		closestMatrixPosition: IMatrixPosition,
		minDistForPosition: IMinDistForPosition
	): IMatrixPosition {
		const closestMatrixPositionKey = closestMatrixPosition.i + ':' + closestMatrixPosition.j
		closestMatrixPosition.key      = closestMatrixPositionKey
		minDistForPosition.exactMatches.set(closestMatrixPositionKey, closestMatrixPosition)
		const distancePositions    = this.findDistancePositions(
			newPosition, closestMatrixPosition, minDistForPosition.exactMatches)
		closestMatrixPosition.done = true

		let newClosestMatrixPosition
		let newMinDist            = distancePositions.minDist
		let currentDist           = minDistForPosition.minDist
		let currentDistance       = currentDist.dist
		let currentAlignmentScore = currentDist.alignScore
		if (newMinDist && (
			newMinDist.dist < currentDistance
			|| (newMinDist.dist === currentDistance
			&& newMinDist.moves < currentDist.moves))) {
			minDistForPosition.minDist = newMinDist
			newClosestMatrixPosition   = closestMatrixPosition
		}
		for (const [key, exactMatchPosition] of minDistForPosition.exactMatches) {
			if (!exactMatchPosition.done) {
				const evenCloserMatrixPosition = this.findMinimumDistance(
					processedMatches, newPosition, exactMatchPosition, minDistForPosition)
				if (evenCloserMatrixPosition) {
					newClosestMatrixPosition = evenCloserMatrixPosition
				}
			}
		}

		return newClosestMatrixPosition
	}

	private matrixPositionsMatch(
		vals1: PositionValues,
		vals2: PositionValues
	) {
		for (let i = 0; i < NUM_VALS; i++) {
			if (vals1[i] !== vals2[i]) {
				return false
			}
		}

		return true
	}

	private findDistancePositions(
		newPosition: PositionValues,
		closestMatrixPosition: IMatrixPosition,
		exactMatches: Map<string, IMatrixPosition>
	): IDistancePositions {
		const numValuesInArray                                 = NUM_VALS
		let dimensionMismatchInClosestPosition                 = false
		const closestValues                                    = closestMatrixPosition.values
		let directionFromClosestPosition: Array<Direction | 0> = []
		for (let k = 0; k < numValuesInArray; k++) {
			if (!!closestValues [k] !== !!newPosition[k]) {
				// TODO: see if this is necessary
				dimensionMismatchInClosestPosition = true
			}
			directionFromClosestPosition[k] = this.getPositionDiffDirection(
				newPosition, closestValues, k as ValueArrayPosition)
		}

		let matrixPositionMatch: IMatrixPositionMatch
		let neighborDists: INeighborDistance[][] = [[], [], [], [], [], []]
		neighborDists[-1]                        = []
		neighborDists[-2]                        = []
		neighborDists[-3]                        = []
		neighborDists[-4]                        = []
		neighborDists[-5]                        = []
		for (let i = -5; i <= 5; i++) {
			position_loop: for (let j = -5; j <= 5; j++) {
				if (i === 0 && j === 0) {
					continue
				}
				let neighborI = this.base72Pos(closestMatrixPosition.i, i)
				let neighborJ = this.base72Pos(closestMatrixPosition.j, j)

				let neighborPositionKey = neighborI + ':' + neighborJ
				if (exactMatches.has(neighborPositionKey)) {
					continue
				}
				const values = VALUE_MATRICES[2][neighborI][neighborJ]

				let maxDistance: DistanceFromClosestMatrixPosition = 0
				const neighborDistance: INeighborDistance          = {
					dist: maxDistance,
					maxDistIndex: null,
					valueDists: []
				}
				neighborDists[i][j]                                = neighborDistance

				let exactMatch = true
				// let visibleDimensionMismatch = false
				// let neighborDirectionDiffs: Array<Direction | 0> = [0, 0, 0, 0, 0, 0]
				let numInRangePositions    = 0
				let numOutOfRangePositions = 0
				for (let k = 0; k < numValuesInArray; k++) {
					let currentValue = values[k]
					if (closestValues[k] !== currentValue) {
						exactMatch = false
					}

					// 17 82 1
					let directionFromNeighbor = this.getPositionDiffDirection(
						newPosition, values, k as ValueArrayPosition)
					if (!currentValue && !newPosition[k]) {
						// positions are either not applicable or are equal => does not count
					} else {
						const directionFromClosest = directionFromClosestPosition[k]
						if (!directionFromClosest) {
							numInRangePositions++
						} else if (directionFromClosest === directionFromNeighbor) {
							numOutOfRangePositions++
						} else {
							numInRangePositions++
						}
					}
				}
				if (exactMatch) {
					exactMatches.set(neighborPositionKey, {
						i: neighborI,
						j: neighborJ,
						key: neighborPositionKey,
						values
					})
					continue
				}

				let alignScore = numInRangePositions
				- numOutOfRangePositions as PositionAlignmentScore
				if (
					// visibleDimensionMismatch ||
					alignScore < 0) {
					continue
				}
				let dimDists: DistanceFromClosestMatrixPosition[] = []
				for (let k = 0; k < numValuesInArray; k++) {
					const currentDistance = Math.abs(newPosition[k] - values[k]) as DistanceFromClosestMatrixPosition
					neighborDistance.valueDists.push(currentDistance)
					dimDists.push(currentDistance)
					if (currentDistance > maxDistance) {
						maxDistance                   = currentDistance as DistanceFromClosestMatrixPosition
						neighborDistance.dist         = maxDistance
						neighborDistance.maxDistIndex = k as ValueArrayPosition
					}
				}
				let dimensionShifts = Math.abs(i) + Math.abs(j) as 1 | 2
				if (!matrixPositionMatch
					|| matrixPositionMatch.alignScore < alignScore
					|| (matrixPositionMatch.alignScore === alignScore
						&& (matrixPositionMatch.dist > maxDistance
							|| (matrixPositionMatch.dist === maxDistance
								&& dimensionShifts < matrixPositionMatch.moves)))) {
					matrixPositionMatch = {
						alignScore,
						dimDists,
						dist: maxDistance,
						i: i as Direction,
						j: j as Direction,
						moves: dimensionShifts
					}
				}
			}
		}

		return {
			minDist: matrixPositionMatch,
			neighborDists
		}
	}

	private positionIsABetterMatch(
		preivousMatrixPositionMatch: IMatrixPositionMatch,
		alignScore: PositionAlignmentScore,
		maxDistance,
		moves
	): boolean {
		return !preivousMatrixPositionMatch
			|| preivousMatrixPositionMatch.alignScore < alignScore
			|| (preivousMatrixPositionMatch.alignScore === alignScore
				&& (preivousMatrixPositionMatch.dist > maxDistance
					|| (preivousMatrixPositionMatch.dist === maxDistance
						&& preivousMatrixPositionMatch.moves > moves)))
	}

	private getDimensionShift()

	/*
		private get1DOffsetFinalPosition(
			newPosition: PositionValues,
			closestMatrixPosition: IMatrixPosition,
			minDist: IMatrixPositionMatch
		): IFinalPosition {
			let separation  = this.get1DDegreeSeparation(closestMatrixPosition, minDist)
			let stepDegrees = STEP_DEGS
			switch (minDist.i) {
				case -1:
					return {
						x: closestMatrixPosition.i * stepDegrees - separation,
						y: closestMatrixPosition.j * stepDegrees
					}
				case 1:
					return {
						x: closestMatrixPosition.i * stepDegrees + separation,
						y: closestMatrixPosition.j * stepDegrees
					}
				default:
					switch (minDist.j) {
						case -1:
							return {
								x: closestMatrixPosition.i * stepDegrees,
								y: closestMatrixPosition.j * stepDegrees - separation
							}
						case 1:
							return {
								x: closestMatrixPosition.i * stepDegrees,
								y: closestMatrixPosition.j * stepDegrees + separation
							}
					}
			}
		}

		private get1DDegreeSeparation(
			closestMatrixPosition: IMatrixPosition,
			minDist: IMatrixPositionMatch
		): number {
			const nextClosestCellValues = VALUE_MATRICES[2]
				[this.base72Pos(closestMatrixPosition.i, minDist.i)]
				[this.base72Pos(closestMatrixPosition.j, minDist.j)]
			const closestCellValues     = closestMatrixPosition.values
			let maxDistance             = 0
			for (let k = 0; k < NUM_VALS; k++) {
				const currentDistance = Math.abs(
					nextClosestCellValues[k] - closestCellValues[k]) as DistanceFromClosestMatrixPosition
				if (maxDistance < currentDistance) {
					maxDistance = currentDistance
				}
			}
			let increment = maxDistance / STEP_DEGS

			return Math.round((maxDistance - minDist.dist) / increment)
		}
	*/
	private get2DOffsetFinalPosition(
		newPosition: PositionValues,
		closestMatrixPosition: IMatrixPosition,
		minDist: IMatrixPositionMatch
	): IFinalPosition {
		// 0 & 5 determine x movement
		// 1,2,3,4 determine y movement
		// need to take the distances from newPosition and apply them accordingly
		const separations = this.get2DDegreeSeparations(closestMatrixPosition, minDist)
		const stepDegrees = STEP_DEGS
		// const closestMatrixIPositionDegrees = closestMatrixPosition.i * stepDegrees
		// const closestMatrixJPositionDegrees = closestMatrixPosition.j * stepDegrees

		let x = this.getFinalPositionOfDimension(
			closestMatrixPosition.i * stepDegrees,
			minDist.i,
			separations.i
		)

		let y = this.getFinalPositionOfDimension(
			closestMatrixPosition.j * stepDegrees,
			minDist.j,
			separations.j
		)

		return {
			x,
			y
		}
	}

	private getFinalPositionOfDimension(
		closestMatrixPositionDegrees: number,
		separationDirection: Direction,
		separation: number
	): number {
		if (separationDirection === 1) {
			closestMatrixPositionDegrees += separation
		} else if (separationDirection === -1) {
			closestMatrixPositionDegrees -= separation
		}

		return closestMatrixPositionDegrees
	}

	private get2DDegreeSeparations(
		closestMatrixPosition: IMatrixPosition,
		minDist: IMatrixPositionMatch
	): {
		i: number,
		j: number
	} {
		let cellSeparationDistances           = this.getDists(
			closestMatrixPosition, minDist.i, minDist.j)
		let [largestIDistIndex, largestIDist] = this.getLargestDistAndIdx(
			[0, 5], cellSeparationDistances)
		let [largestJDistIndex, largestJDist] = this.getLargestDistAndIdx(
			[1, 2, 3, 4], cellSeparationDistances)

		// get next cell values
		let numberOfMatrixDivisions = NUM_DIVS
		// const nextClosestCellValues = VALUE_MATRICES[2]
		// 	[(closestMatrixPosition.i + minDist.i) % numberOfMatrixDivisions]
		// 	[(closestMatrixPosition.j + minDist.j) % numberOfMatrixDivisions]
		// const closestCellValues    = closestMatrixPosition.values

		let iDistance = minDist.dimDists[largestIDistIndex]
		let iRatio    = 1 - iDistance / largestIDist
		let jDistance = minDist.dimDists[largestJDistIndex]
		let jRatio    = 1 - jDistance / largestJDist

		let matrixStepDegrees = STEP_DEGS
		return {
			i: Math.round(matrixStepDegrees * iRatio),
			j: Math.round(matrixStepDegrees * jRatio)
		}
	}

	private getDists(
		closestMatrixPosition: IMatrixPosition,
		iOffset: number,
		jOffset: number
	): number[] {
		let numberOfMatrixDivisions  = NUM_DIVS
		// get vertical values
		const nextVerticalCellValues = VALUE_MATRICES[2]
			[this.base72Pos(closestMatrixPosition.i, iOffset)]
			[this.base72Pos(closestMatrixPosition.j, jOffset)]
		let distances                = []
		for (let k = 0; k < NUM_VALS; k++) {
			const currentDistance = Math.abs(
				nextVerticalCellValues[k]
				- closestMatrixPosition.values[k]) as DistanceFromClosestMatrixPosition
			distances.push(currentDistance)
		}

		return distances
	}

	private getLargestDistAndIdx(
		indexes: ValueArrayPosition[],
		dists: number[]
	): [ValueArrayPosition, DistanceFromClosestMatrixPosition] {
		let largestDist
		let largestDistIndex
		for (let index of indexes) {
			const dist = dists[index]
			if (!largestDist || largestDist < dist) {
				largestDist      = dist
				largestDistIndex = index
			}
		}

		return [largestDistIndex, largestDist]
	}

	/*
		private getInc(
			nextClosesCellValues: PositionValues,
			closestCellValues: PositionValues,
			largestDistIndex
		) {
			const maxDistance = Math.abs(
				nextClosesCellValues[largestDistIndex]
				- closestCellValues[largestDistIndex]) as DistanceFromClosestMatrixPosition
			return maxDistance / STEP_DEGS
		}
	*/

	private base72Pos(
		matrixPosition: number,
		offset: number
	): MatrixIndex {
		let base72Position = (matrixPosition + offset) % NUM_DIVS

		return normMatrixIdx(base72Position)
	}

	private getPositionDiffDirection(
		from: PositionValues,
		to: PositionValues,
		index: ValueArrayPosition
	): Direction | 0 {
		let direction: Direction | 0 = 0
		let positionDifference       = from[index] - to[index]
		if (positionDifference > 0) {
			direction = 1
		} else if (positionDifference < 0) {
			direction = -1
		}

		return direction
	}

}
