import {
	MatrixIndex,
	NUM_DIVS,
	NUM_VALS,
	PositionValues,
	STEP_DEGS,
	VALUE_MATRICES,
	ValueArrayPosition
}                      from '../cubeMoveMatrix'
import {normMatrixIdx} from '../cubeMovement'
import {IViewport}     from '../Viewport'
import {
	DistanceFromMatrixPosition,
	IFinalPosition,
	IMatrixPosition
}                      from './types'

export interface INeighborDistance {
	valueDists: DistanceFromMatrixPosition[],
	dist: DistanceFromMatrixPosition,
	maxDistIndex: ValueArrayPosition
}

export interface IMinDistancePosition {
	i: number
	j: number
	dist: DistanceFromMatrixPosition
	moves: 1 | 2
}

export interface IMinDistForPosition {
	exactMatches: Map<string, IMatrixPosition>
	minDist: IMinDistancePosition
}

export interface IDistancePositions {
	minDist: IMinDistancePosition
	neighborDists: INeighborDistance[][]
}

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
		let newMinDist      = distancePositions.minDist
		let currentDist     = minDistForPosition.minDist
		let currentDistance = currentDist.dist
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
		currentPosition: PositionValues,
		closestMatrixPosition: IMatrixPosition,
		exactMatches: Map<string, IMatrixPosition>
	): IDistancePositions {
		let numValuesInArray         = NUM_VALS
		let closestDimensionMismatch = false
		for (let i = 0; i < numValuesInArray; i++) {
			if (!!closestMatrixPosition.values[i] !== !!currentPosition[i]) {
				closestDimensionMismatch = true
				break
			}
		}

		let minDist: IMinDistancePosition
		let neighborDists: INeighborDistance[][] = [[], []]
		neighborDists[-1]                        = []
		for (let i = -1; i <= 1; i++) {
			position_loop: for (let j = -1; j <= 1; j++) {
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

				let maxDistance: DistanceFromMatrixPosition = 0
				const neighborDistance: INeighborDistance   = {
					dist: maxDistance,
					maxDistIndex: null,
					valueDists: []
				}
				neighborDists[i][j]                         = neighborDistance

				let exactMatch               = true
				let visibleDimensionMismatch = false
				for (let k = 0; k < numValuesInArray; k++) {
					let currentValue = values[k]
					if (closestMatrixPosition.values[k] !== currentValue) {
						exactMatch = false
					}
					// exclude value that don't match visible dimensions
					if (closestDimensionMismatch
						&& !!currentValue !== !!currentPosition[k]) {
						visibleDimensionMismatch = true
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
				if (visibleDimensionMismatch) {
					continue
				}
				for (let k = 0; k < numValuesInArray; k++) {
					const currentDistance = Math.abs(currentPosition[k] - values[k]) as DistanceFromMatrixPosition
					neighborDistance.valueDists.push(currentDistance)
					if (currentDistance > maxDistance) {
						maxDistance                   = currentDistance as DistanceFromMatrixPosition
						neighborDistance.dist         = maxDistance
						neighborDistance.maxDistIndex = k as ValueArrayPosition
					}
				}

				if (!minDist
					|| minDist.dist > maxDistance) {
					minDist = {
						dist: maxDistance,
						i,
						j,
						moves: Math.abs(i) + Math.abs(j) as 1 | 2
					}
				} else if (minDist && minDist.dist === maxDistance) {
					let moves = Math.abs(i) + Math.abs(j) as 1 | 2
					if (moves < minDist.moves) {
						minDist = {
							dist: maxDistance,
							i,
							j,
							moves
						}
					}
				}
			}
		}

		return {
			minDist,
			neighborDists
		}
	}

	private get1DOffsetFinalPosition(
		currentPosition: PositionValues,
		closestMatrixPosition: IMatrixPosition,
		minDist: IMinDistancePosition
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
		minDist: IMinDistancePosition
	): number {
		const nextClosestCellValues = VALUE_MATRICES[2]
			[this.base72Pos(closestMatrixPosition.i, minDist.i)]
			[this.base72Pos(closestMatrixPosition.j, minDist.j)]
		const closestCellValues     = closestMatrixPosition.values
		let maxDistance             = 0
		for (let k = 0; k < NUM_VALS; k++) {
			const currentDistance = Math.abs(
				nextClosestCellValues[k] - closestCellValues[k]) as DistanceFromMatrixPosition
			if (maxDistance < currentDistance) {
				maxDistance = currentDistance
			}
		}
		let increment = maxDistance / STEP_DEGS

		return Math.round((maxDistance - minDist.dist) / increment)
	}

	private get2DOffsetFinalPosition(
		newPosition: PositionValues,
		closestMatrixPosition: IMatrixPosition,
		minDist: IMinDistancePosition
	): IFinalPosition {
		// 0 & 5 determine x movement
		// 1,2,3,4 determine y movement
		// need to take the distances from newPosition and apply them accordingly
		let separations = this.get2DDegreeSeparations(closestMatrixPosition, minDist)
		let stepDegrees = STEP_DEGS
		switch (minDist.i) {
			case -1:
				switch (minDist.j) {
					case -1:
						return {
							x: closestMatrixPosition.i * stepDegrees - separations.i,
							y: closestMatrixPosition.j * stepDegrees - separations.j
						}
					case 1:
						return {
							x: closestMatrixPosition.i * stepDegrees - separations.i,
							y: closestMatrixPosition.j * stepDegrees + separations.j
						}
				}
			case 1:
				switch (minDist.j) {
					case -1:
						return {
							x: closestMatrixPosition.i * stepDegrees + separations.i,
							y: closestMatrixPosition.j * stepDegrees - separations.j
						}
					case 1:
						return {
							x: closestMatrixPosition.i * stepDegrees + separations.i,
							y: closestMatrixPosition.j * stepDegrees + separations.j
						}
				}
		}
	}

	private get2DDegreeSeparations(
		closestMatrixPosition: IMatrixPosition,
		minDist: IMinDistancePosition
	): {
		i: number,
		j: number
	} {

		let horizontalDists                                     = this.getDists(closestMatrixPosition, 0, minDist.j)
		let [largestHorizontalDistIndex, largestHorizontalDist] = this.getLargestDistAndIdx(horizontalDists)

		let verticalDists                                   = this.getDists(closestMatrixPosition, minDist.i, 0)
		let [largestVerticalDistIndex, largestVerticalDist] = this.getLargestDistAndIdx(verticalDists)

		// get next cell values
		const nextClosesCellValues = VALUE_MATRICES[2]
			[closestMatrixPosition.i + minDist.i][closestMatrixPosition.j + minDist.j]
		const closestCellValues    = closestMatrixPosition.values
		let horizontalIncrement    = this.getInc(
			nextClosesCellValues, closestCellValues, largestHorizontalDistIndex)
		let verticalIncrement      = this.getInc(
			nextClosesCellValues, closestCellValues, largestVerticalDistIndex)

		return {
			i: Math.round((largestHorizontalDist - minDist.dist) / horizontalIncrement),
			j: Math.round((largestVerticalDist - minDist.dist) / verticalIncrement)
		}
	}

	private getDists(
		closestMatrixPosition: IMatrixPosition,
		iOffset: number,
		jOffset: number
	): number[] {
		// get vertical values
		const nextVerticalCellValues = VALUE_MATRICES[2]
			[closestMatrixPosition.i + iOffset][closestMatrixPosition.j + jOffset]
		let distances                = []
		for (let k = 0; k < NUM_VALS; k++) {
			const currentDistance = Math.abs(
				nextVerticalCellValues[k]
				- closestMatrixPosition.values[k]) as DistanceFromMatrixPosition
			distances.push(currentDistance)
		}

		return distances
	}

	private getLargestDistAndIdx(
		dists: number[]
	): [ValueArrayPosition, DistanceFromMatrixPosition] {
		let largestDist
		let largestDistIndex
		for (let k = 0; k < NUM_VALS; k++) {
			const dist = dists[k]
			if (!largestDist || largestDist < dist) {
				largestDist      = dist
				largestDistIndex = k
			}
		}

		return [largestDistIndex, largestDist]
	}

	private getInc(
		nextClosesCellValues: PositionValues,
		closestCellValues: PositionValues,
		largestDistIndex
	) {
		const maxDistance = Math.abs(
			nextClosesCellValues[largestDistIndex]
			- closestCellValues[largestDistIndex]) as DistanceFromMatrixPosition
		return maxDistance / STEP_DEGS
	}

	private base72Pos(
		matrixPosition: number,
		offset: number
	): MatrixIndex {
		let base72Position = (matrixPosition + offset) % NUM_DIVS

		return normMatrixIdx(base72Position)
	}

}
