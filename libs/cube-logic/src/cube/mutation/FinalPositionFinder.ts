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
	DistanceFromMatrixPosition,
	IFinalPosition,
	IMatrixPosition
}                  from './types'

export interface INeighborDistance {
	valueDists: DistanceFromMatrixPosition[],
	dist: DistanceFromMatrixPosition,
	maxDistIndex: ValueArrayPosition
}

export interface IMinDistancePosition {
	dist: DistanceFromMatrixPosition
	dimDists: DistanceFromMatrixPosition[]
	i: Direction
	j: Direction
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
		newPosition: PositionValues,
		closestMatrixPosition: IMatrixPosition,
		exactMatches: Map<string, IMatrixPosition>
	): IDistancePositions {
		let numValuesInArray         = NUM_VALS
		let closestDimensionMismatch = false
		for (let k = 0; k < numValuesInArray; k++) {
			if (!!closestMatrixPosition.values[k] !== !!newPosition[k]) {
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
						&& !!currentValue !== !!newPosition[k]) {
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
				let dimDists: DistanceFromMatrixPosition[] = []
				for (let k = 0; k < numValuesInArray; k++) {
					const currentDistance = Math.abs(newPosition[k] - values[k]) as DistanceFromMatrixPosition
					neighborDistance.valueDists.push(currentDistance)
					dimDists.push(currentDistance)
					if (currentDistance > maxDistance) {
						maxDistance                   = currentDistance as DistanceFromMatrixPosition
						neighborDistance.dist         = maxDistance
						neighborDistance.maxDistIndex = k as ValueArrayPosition
					}
				}

				if (!minDist
					|| minDist.dist > maxDistance) {
					minDist = {
						dimDists,
						dist: maxDistance,
						i: i as Direction,
						j: j as Direction,
						moves: Math.abs(i) + Math.abs(j) as 1 | 2
					}
				} else if (minDist && minDist.dist === maxDistance) {
					let moves = Math.abs(i) + Math.abs(j) as 1 | 2
					if (moves < minDist.moves) {
						minDist = {
							dimDists,
							dist: maxDistance,
							i: i as Direction,
							j: j as Direction,
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

	/*
		private get1DOffsetFinalPosition(
			newPosition: PositionValues,
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
	*/
	private get2DOffsetFinalPosition(
		newPosition: PositionValues,
		closestMatrixPosition: IMatrixPosition,
		minDist: IMinDistancePosition
	): IFinalPosition {
		// 0 & 5 determine x movement
		// 1,2,3,4 determine y movement
		// need to take the distances from newPosition and apply them accordingly
		const separations                   = this.get2DDegreeSeparations(closestMatrixPosition, minDist)
		const stepDegrees                   = STEP_DEGS
		const closestMatrixIPositionDegrees = closestMatrixPosition.i * stepDegrees
		const closestMatrixJPositionDegrees = closestMatrixPosition.j * stepDegrees

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
		minDist: IMinDistancePosition
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
			[(closestMatrixPosition.i + iOffset) % numberOfMatrixDivisions]
			[(closestMatrixPosition.j + jOffset) % numberOfMatrixDivisions]
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
		indexes: ValueArrayPosition[],
		dists: number[]
	): [ValueArrayPosition, DistanceFromMatrixPosition] {
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
				- closestCellValues[largestDistIndex]) as DistanceFromMatrixPosition
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

}
