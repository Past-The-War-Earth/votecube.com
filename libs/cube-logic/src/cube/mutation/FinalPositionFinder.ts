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
	dimDists: DistanceFromClosestMatrixPosition[]
	dimShifts: NumberOfDimensionShifts
	dist: DistanceFromClosestMatrixPosition
	iShift: MatrixPositionShift
	jShift: MatrixPositionShift
	values: PositionValues
}

export interface IMatchForPosition {
	exactMatches: Map<string, IMatrixPosition>
	match: IMatrixPositionMatch
}

export interface IDistancePositions {
	match: IMatrixPositionMatch
	neighborDists: INeighborDistance[][]
}

export type MatrixPositionShift = -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5

export type NumberOfDimensionShifts = 0 | 1 | 2

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

		let matchForPosition: IMatchForPosition = {
			exactMatches: new Map(),
			match: {
				alignScore: -1,
				dist: 100
			}
		} as any
		this.findMinimumDistance(
			{}, newPosition, closestMatrixPosition, matchForPosition)
		let directionVectorMatch = matchForPosition.match
		// If the difference is in one dimension
		// if (!match.iShift || !match.jShift) {
		// 	return this.get1DOffsetFinalPosition(newPosition, closestMatrixPosition, match)
		// } else {
		return this.get2DOffsetFinalPosition(newPosition, closestMatrixPosition, directionVectorMatch)
		// }
	}

	private findMinimumDistance(
		processedMatches: { [key: string]: IDistancePositions },
		newPosition: PositionValues,
		closestMatrixPosition: IMatrixPosition,
		matchForPosition: IMatchForPosition
	): void {
		const closestMatrixPositionKey = closestMatrixPosition.i + ':' + closestMatrixPosition.j
		closestMatrixPosition.key      = closestMatrixPositionKey
		matchForPosition.exactMatches.set(closestMatrixPositionKey, closestMatrixPosition)
		const distancePositions    = this.findDistancePositions(
			newPosition, closestMatrixPosition, matchForPosition.exactMatches)
		closestMatrixPosition.done = true

		let newMatch = distancePositions.match
		if (this.positionIsABetterMatch(
			matchForPosition.match,
			newMatch.alignScore,
			newMatch.dist,
			newMatch.dimShifts
		)) {
			matchForPosition.match = newMatch
		}
		for (const [key, exactMatchPosition] of matchForPosition.exactMatches) {
			if (!exactMatchPosition.done) {
				this.findMinimumDistance(
					processedMatches, newPosition, exactMatchPosition, matchForPosition)
			}
		}
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
		for (
			let verticalMatrixShift: MatrixPositionShift = -5;
			verticalMatrixShift <= 5;
			verticalMatrixShift++) {
			position_loop: for (
				let horizontalMatrixShift: MatrixPositionShift = -5;
				horizontalMatrixShift <= 5;
				horizontalMatrixShift++) {
				if (verticalMatrixShift === 0 && horizontalMatrixShift === 0) {
					continue
				}
				let neighborI = this.base72Pos(closestMatrixPosition.i, verticalMatrixShift)
				let neighborJ = this.base72Pos(closestMatrixPosition.j, horizontalMatrixShift)

				let neighborPositionKey = neighborI + ':' + neighborJ
				if (exactMatches.has(neighborPositionKey)) {
					continue
				}
				const values = VALUE_MATRICES[2][neighborI][neighborJ]

				let maxDistance: DistanceFromClosestMatrixPosition        = 0
				const neighborDistance: INeighborDistance                 = {
					dist: maxDistance,
					maxDistIndex: null,
					valueDists: []
				}
				neighborDists[verticalMatrixShift][horizontalMatrixShift] = neighborDistance

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
				let numberOfDimensionShifts = this.getDimensionShift(
					verticalMatrixShift as MatrixPositionShift,
					horizontalMatrixShift as MatrixPositionShift)
				if (this.positionIsABetterMatch(
					matrixPositionMatch,
					alignScore,
					verticalMatrixShift,
					horizontalMatrixShift,
					maxDistance,
					numberOfDimensionShifts
				)) {
					matrixPositionMatch = {
						alignScore,
						dimDists,
						dimShifts: numberOfDimensionShifts,
						dist: maxDistance,
						iShift: verticalMatrixShift as MatrixPositionShift,
						jShift: horizontalMatrixShift as MatrixPositionShift,
						values
					}
				}
			}
		}

		return {
			match: matrixPositionMatch,
			neighborDists
		}
	}

	private positionIsABetterMatch(
		preivousMatrixPositionMatch: IMatrixPositionMatch,
		newAlignScore: PositionAlignmentScore,
		verticalMatrixShift: MatrixPositionShift,
		horizontalMatrixShift: MatrixPositionShift,
		newDistance: DistanceFromClosestMatrixPosition,
		newNumberOfDimensionShifts: NumberOfDimensionShifts
	): boolean {
		return !preivousMatrixPositionMatch
			|| preivousMatrixPositionMatch.alignScore < newAlignScore
			|| (preivousMatrixPositionMatch.alignScore === newAlignScore
		preivousMatrixPositionMatch
				&& (preivousMatrixPositionMatch.dist > newDistance
					|| (preivousMatrixPositionMatch.dist === newDistance
						&& preivousMatrixPositionMatch.dimShifts > newNumberOfDimensionShifts)))
	}

	private getDimensionShift(
		verticalMatrixShift: MatrixPositionShift,
		horizontalMatrixShift: MatrixPositionShift,
	): NumberOfDimensionShifts {
		let verticalDimensionShift   = Math.abs(verticalMatrixShift) ? 1 : 0
		let horizontalDimensionShift = Math.abs(horizontalMatrixShift) ? 1 : 0

		return verticalDimensionShift + horizontalDimensionShift as NumberOfDimensionShifts
	}

	/*
		private get1DOffsetFinalPosition(
			newPosition: PositionValues,
			closestMatrixPosition: IMatrixPosition,
			match: IMatrixPositionMatch
		): IFinalPosition {
			let separation  = this.get1DDegreeSeparation(closestMatrixPosition, match)
			let stepDegrees = STEP_DEGS
			switch (match.iShift) {
				case -1:
					return {
						x: closestMatrixPosition.iShift * stepDegrees - separation,
						y: closestMatrixPosition.jShift * stepDegrees
					}
				case 1:
					return {
						x: closestMatrixPosition.iShift * stepDegrees + separation,
						y: closestMatrixPosition.jShift * stepDegrees
					}
				default:
					switch (match.jShift) {
						case -1:
							return {
								x: closestMatrixPosition.iShift * stepDegrees,
								y: closestMatrixPosition.jShift * stepDegrees - separation
							}
						case 1:
							return {
								x: closestMatrixPosition.iShift * stepDegrees,
								y: closestMatrixPosition.jShift * stepDegrees + separation
							}
					}
			}
		}

		private get1DDegreeSeparation(
			closestMatrixPosition: IMatrixPosition,
			match: IMatrixPositionMatch
		): number {
			const nextClosestCellValues = VALUE_MATRICES[2]
				[this.base72Pos(closestMatrixPosition.iShift, match.iShift)]
				[this.base72Pos(closestMatrixPosition.jShift, match.jShift)]
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

			return Math.round((maxDistance - match.dist) / increment)
		}
	*/
	private get2DOffsetFinalPosition(
		newPosition: PositionValues,
		closestMatrixPosition: IMatrixPosition,
		directionVectorMatch: IMatrixPositionMatch
	): IFinalPosition {
		// 0 & 5 determine x movement
		// 1,2,3,4 determine y movement
		// need to take the distances from newPosition and apply them accordingly
		const separations = this.get2DDegreeSeparations(closestMatrixPosition, directionVectorMatch)
		const stepDegrees = STEP_DEGS
		// const closestMatrixIPositionDegrees = closestMatrixPosition.iShift * stepDegrees
		// const closestMatrixJPositionDegrees = closestMatrixPosition.jShift * stepDegrees

		let x = this.getFinalPositionOfDimension(
			closestMatrixPosition.i * stepDegrees,
			directionVectorMatch.iShift,
			separations.i
		)

		let y = this.getFinalPositionOfDimension(
			closestMatrixPosition.j * stepDegrees,
			directionVectorMatch.jShift,
			separations.j
		)

		return {
			x,
			y
		}
	}

	private getFinalPositionOfDimension(
		closestMatrixPositionDegrees: number,
		separationPositionShift: MatrixPositionShift,
		separation: number
	): number {
		// TODO: see if this should be > 0, with a special case for === 0
		if (separationPositionShift >= 0) {
			closestMatrixPositionDegrees += separation
			// } else if (separationDirection === -1) {
		} else {
			closestMatrixPositionDegrees -= separation
		}

		return closestMatrixPositionDegrees
	}

	private get2DDegreeSeparations(
		closestMatrixPosition: IMatrixPosition,
		directionVectorMatch: IMatrixPositionMatch
	): {
		i: number,
		j: number
	} {
		let cellSeparationDistances           = this.getDirectionalDists(
			closestMatrixPosition, directionVectorMatch.values)
		let [largestIDistIndex, largestIDist] = this.getLargestDistAndIdx(
			[0, 5], cellSeparationDistances)
		let [largestJDistIndex, largestJDist] = this.getLargestDistAndIdx(
			[1, 2, 3, 4], cellSeparationDistances)

		// get next cell values
		let numberOfMatrixDivisions = NUM_DIVS
		// const nextClosestCellValues = VALUE_MATRICES[2]
		// 	[(closestMatrixPosition.iShift + match.iShift) % numberOfMatrixDivisions]
		// 	[(closestMatrixPosition.jShift + match.jShift) % numberOfMatrixDivisions]
		// const closestCellValues    = closestMatrixPosition.values

		let iDistance = directionVectorMatch.dimDists[largestIDistIndex]
		let iRatio    = 1 - iDistance / largestIDist
		let jDistance = directionVectorMatch.dimDists[largestJDistIndex]
		let jRatio    = 1 - jDistance / largestJDist

		let matrixStepDegrees = STEP_DEGS
		return {
			i: Math.round((matrixStepDegrees * directionVectorMatch.iShift) * iRatio),
			j: Math.round(Math.abs(matrixStepDegrees * directionVectorMatch.jShift) * jRatio)
		}
	}

	private getDirectionalDists(
		closestMatrixPosition: IMatrixPosition,
		directionVectorPositionValues: PositionValues
	): number[] {
		let distances = []
		for (let k = 0; k < NUM_VALS; k++) {
			const currentDistance = Math.abs(
				directionVectorPositionValues[k]
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
