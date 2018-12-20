import {
	PositionValues,
	VALUE_MATRICES
} from '../cubeMoveMatrix'
import {
	ValueArrayPosition,
	Viewport
} from '../Viewport'
import {
	DistanceFromMatrixPosition,
	FinalPosition,
	MatrixPosition
} from './types'

export interface NeighborDistance {
	valueDists: DistanceFromMatrixPosition[],
	dist: DistanceFromMatrixPosition,
	maxDistIndex: ValueArrayPosition
}

export interface MinDistancePosition {
	i: number
	j: number
	dist: DistanceFromMatrixPosition
}

export interface MinDistForPosition {
	exactMatches: Set<string>
	minDist: MinDistancePosition
	pos: MatrixPosition,
}

export interface DistancePositions {
	exactMatches: MatrixPosition[]
	minDist: MinDistancePosition
	neighborDists: NeighborDistance[][]
}

export class FinalPositionFinder {

	findFinalPosition(
		closestMatrixPosition: MatrixPosition,
		viewport: Viewport
	): FinalPosition {
		let positionPercentages             = viewport.pp
		let currentPosition: PositionValues = [
			positionPercentages.x.plus,
			positionPercentages.y.plus,
			positionPercentages.z.plus,
			positionPercentages.y.minus,
			positionPercentages.z.minus,
			positionPercentages.x.minus,
		]
		if (this.matrixPositionsMatch(closestMatrixPosition.values, currentPosition)) {
			return {
				x: closestMatrixPosition.i * 5,
				y: closestMatrixPosition.j * 5
			}
		}

		let minDistForPosition: MinDistForPosition
		= {exactMatches: new Set(), minDist: {dist: 100}} as any
		this.findMinimumDistance({}, currentPosition, closestMatrixPosition, minDistForPosition)
		let minDist = minDistForPosition.minDist
		// If the difference is in one dimension
		if (!minDist.i || !minDist.j) {
			return this.get1DOffsetFinalPosition(
				minDistForPosition.pos, minDist)
		} else {
			return this.get2DOffsetFinalPosition(
				minDistForPosition.pos, minDist)
		}
	}

	private findMinimumDistance(
		processedMatches: {[key: string] : DistancePositions},
		currentPosition: PositionValues,
		closestMatrixPosition: MatrixPosition,
		minDistForPosition: MinDistForPosition
	): void {
		const distancePositions = this.findDistancePositions(
			currentPosition, closestMatrixPosition, minDistForPosition.exactMatches)
		processedMatches[closestMatrixPosition.i + ':' + closestMatrixPosition.j] = distancePositions
		let newMinDist           = distancePositions.minDist
		if(newMinDist.dist < minDistForPosition.minDist.dist) {
			minDistForPosition.minDist = newMinDist
			minDistForPosition.pos = closestMatrixPosition
		}
		distancePositions.exactMatches
			.map(exactMatch => exactMatch.i + ':' + exactMatch.j)
			.forEach(matchKey => minDistForPosition.exactMatches.add(matchKey))
		distancePositions.exactMatches.forEach(exactMatch => {
			if(processedMatches[exactMatch.i + ':' + exactMatch.j]) {
				return
			}
			this.findMinimumDistance(processedMatches, currentPosition, exactMatch, minDistForPosition)
		})

	}

	private matrixPositionsMatch(
		vals1: PositionValues,
		vals2: PositionValues
	) {
		for (let i = 0; i < 6; i++) {
			if (vals1[i] !== vals2[i]) {
				return false
			}
		}

		return true
	}

	private findDistancePositions(
		currentPosition: PositionValues,
		closestMatrixPosition: MatrixPosition,
		knownExactMatches: Set<string>
	): DistancePositions {
		let minDist: MinDistancePosition
		let neighborDists: NeighborDistance[][] = [[], []]
		let exactMatches: MatrixPosition[]      = []
		neighborDists[-1]                       = []
		for (let i = -1; i <= 1; i++) {
			for (let j = -1; j <= 1; j++) {
				if (i === 0 && j === 0) {
					continue
				}
				let neighborI = (closestMatrixPosition.i + i) % 72
				if(neighborI < 0) {
					neighborI = 72 + neighborI
				}
				let neighborJ = (closestMatrixPosition.j + j) % 72
				if(neighborJ < 0) {
					neighborJ = 72 + neighborJ
				}
				if(knownExactMatches.has(neighborI + ':' + neighborJ)) {
					continue
				}
				const values    = VALUE_MATRICES[2][neighborI][neighborJ]

				let maxDistance: DistanceFromMatrixPosition = 0
				const neighborDistance: NeighborDistance    = {
					valueDists: [],
					dist: maxDistance,
					maxDistIndex: null
				}
				neighborDists[i][j]                         = neighborDistance

				let exactMatch = true
				for (let k = 0; k < 6; k++) {
					if (closestMatrixPosition.values[k] != values[k]) {
						exactMatch = false
					}
				}
				if (exactMatch) {
					exactMatches.push({
						i: neighborI,
						j: neighborJ,
						values
					})
					continue
				}
				for (let k = 0; k < 6; k++) {
					const currentDistance =
									Math.abs(currentPosition[k] - values[k]) as DistanceFromMatrixPosition
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
						i,
						j,
						dist: maxDistance
					}
				}
			}
		}

		return {
			exactMatches,
			minDist,
			neighborDists
		}
	}

	private get1DOffsetFinalPosition(
		closestMatrixPosition: MatrixPosition,
		minDist: MinDistancePosition
	): FinalPosition {
		let separation = this.get1DDegreeSeparation(closestMatrixPosition, minDist)
		switch (minDist.i) {
			case -1:
				return {
					x: closestMatrixPosition.i - separation,
					y: closestMatrixPosition.j
				}
			case 1:
				return {
					x: closestMatrixPosition.i + separation,
					y: closestMatrixPosition.j
				}
			default:
				switch (minDist.j) {
					case -1:
						return {
							x: closestMatrixPosition.i,
							y: closestMatrixPosition.j - separation
						}
					case 1:
						return {
							x: closestMatrixPosition.i,
							y: closestMatrixPosition.j + separation
						}
				}
		}
	}

	private get1DDegreeSeparation(
		closestMatrixPosition: MatrixPosition,
		minDist: MinDistancePosition
	): number {
		const nextClosestCellValues = VALUE_MATRICES[2]
			[closestMatrixPosition.i + minDist.i][closestMatrixPosition.j + minDist.j]
		const closestCellValues     = closestMatrixPosition.values
		let maxDistance             = 0
		for (let k = 0; k < 6; k++) {
			const currentDistance =
							Math.abs(nextClosestCellValues[k] - closestCellValues[k]) as DistanceFromMatrixPosition
			if (maxDistance > currentDistance) {
				maxDistance = currentDistance
			}
		}
		let increment = maxDistance / 5

		return Math.round(minDist.dist / increment)
	}

	private get2DOffsetFinalPosition(
		closestMatrixPosition: MatrixPosition,
		minDist: MinDistancePosition
	): FinalPosition {
		let separations = this.get2DDegreeSeparations(closestMatrixPosition, minDist)
		switch (minDist.i) {
			case -1:
				switch (minDist.j) {
					case -1:
						return {
							x: closestMatrixPosition.i - separations.i,
							y: closestMatrixPosition.j - separations.j
						}
					case 1:
						return {
							x: closestMatrixPosition.i - separations.i,
							y: closestMatrixPosition.j + separations.j
						}
				}
			case 1:
				switch (minDist.j) {
					case -1:
						return {
							x: closestMatrixPosition.i + separations.i,
							y: closestMatrixPosition.j - separations.j
						}
					case 1:
						return {
							x: closestMatrixPosition.i + separations.i,
							y: closestMatrixPosition.j + separations.j
						}
				}
		}
	}

	private get2DDegreeSeparations(
		closestMatrixPosition: MatrixPosition,
		minDist: MinDistancePosition
	): {
		i: number,
		j: number
	} {

		let horizontalDists            = this.getDists(closestMatrixPosition, 0, minDist.j)
		let largestHorizontalDistIndex = this.getLargestDistIdx(horizontalDists)

		let verticalDists            = this.getDists(closestMatrixPosition, minDist.i, 0)
		let largestVerticalDistIndex = this.getLargestDistIdx(verticalDists)

		// get next cell values
		const nextClosesCellValues = VALUE_MATRICES[2]
			[closestMatrixPosition.i + minDist.i][closestMatrixPosition.j + minDist.j]
		const closestCellValues    = closestMatrixPosition.values
		let horizontalIncrement    =
					this.getInc(nextClosesCellValues, closestCellValues, largestHorizontalDistIndex)
		let verticalIncrement      =
					this.getInc(nextClosesCellValues, closestCellValues, largestVerticalDistIndex)

		return {
			i: Math.round(minDist.dist / horizontalIncrement),
			j: Math.round(minDist.dist / verticalIncrement)
		}
	}


	private getDists(
		closestMatrixPosition: MatrixPosition,
		iOffset: number,
		jOffset: number
	): number[] {
		// get vertical values
		const nextVerticalCellValues = VALUE_MATRICES[2]
			[closestMatrixPosition.i + iOffset][closestMatrixPosition.j + jOffset]
		let distances                = []
		for (let k = 0; k < 6; k++) {
			const currentDistance =
							Math.abs(nextVerticalCellValues[k]
								- closestMatrixPosition.values[k]) as DistanceFromMatrixPosition
			distances.push(currentDistance)
		}

		return distances
	}

	private getLargestDistIdx(
		dists: number[]
	): ValueArrayPosition {
		let largestDist
		let largestDistIndex
		for (let k = 0; k < 6; k++) {
			const dist = dists[k]
			if (!largestDist || largestDist < dist) {
				largestDist      = dist
				largestDistIndex = k
			}
		}

		return largestDistIndex
	}

	private getInc(
		nextClosesCellValues: PositionValues,
		closestCellValues: PositionValues,
		largestDistIndex
	) {
		const maxDistance =
						Math.abs(nextClosesCellValues[largestDistIndex]
							- closestCellValues[largestDistIndex]) as DistanceFromMatrixPosition
		return maxDistance / 5
	}

}
