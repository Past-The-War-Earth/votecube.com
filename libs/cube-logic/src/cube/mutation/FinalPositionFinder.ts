import {secondInPairIsGreater} from '../../utils/utils'
import {
	MatrixIndex,
	NUM_DIVS,
	NUM_VALS,
	PositionValues,
	STEP_DEGS,
	VALUE_MATRICES,
	ValueArrayPosition
}                              from '../cubeMoveMatrix'
import {
	Direction,
	normMatrixIdx
}                              from '../cubeMovement'
import {IViewport}             from '../Viewport'
import {
	DistanceFromClosestMatrixPosition,
	IFinalPosition,
	IMatrixPosition,
	PositionAlignmentScore
}                              from './types'

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
	shiftScore: MatrixShiftScore
	values: PositionValues
}

export interface IVectorPosition {
	exactMatches: Map<string, IMatrixPosition>
	endPoint: IMatrixPositionMatch
}

export interface IEndPointPosition {
	match: IMatrixPositionMatch
	neighborDists: INeighborDistance[][]
}

export type MatrixPositionShift = -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5
export type MatrixShiftScore = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

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

		let vectorPosition: IVectorPosition = {
			endPoint: {
				alignScore: -1,
				dist: 100
			},
			exactMatches: new Map()
		} as any
		this.findVectorEndPoint(
			{}, newPosition, closestMatrixPosition, vectorPosition)
		let directionVectorMatch = vectorPosition.endPoint
		// If the difference is in one dimension
		// if (!endPoint.iShift || !endPoint.jShift) {
		// 	return this.get1DOffsetFinalPosition(newPosition, closestMatrixPosition, endPoint)
		// } else {
		return this.get2DOffsetFinalPosition(newPosition, closestMatrixPosition, directionVectorMatch)
		// }
	}

	private findVectorEndPoint(
		processedMatches: { [key: string]: IEndPointPosition },
		newPosition: PositionValues,
		closestMatrixPosition: IMatrixPosition,
		vectorPosition: IVectorPosition
	): void {
		const closestMatrixPositionKey = closestMatrixPosition.i + ':' + closestMatrixPosition.j
		closestMatrixPosition.key      = closestMatrixPositionKey
		vectorPosition.exactMatches.set(closestMatrixPositionKey, closestMatrixPosition)
		const endPointPosition     = this.findEndPointPosition(
			newPosition, closestMatrixPosition, vectorPosition.exactMatches)
		closestMatrixPosition.done = true

		let newMatch = endPointPosition.match
		if (this.positionIsABetterMatch(
			vectorPosition.endPoint,
			newMatch.alignScore,
			newMatch.shiftScore,
			newMatch.dist,
			newMatch.dimShifts
		)) {
			vectorPosition.endPoint = newMatch
		}
		for (const [key, exactMatchPosition] of vectorPosition.exactMatches) {
			if (!exactMatchPosition.done) {
				this.findVectorEndPoint(
					processedMatches, newPosition, exactMatchPosition, vectorPosition)
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

	private findEndPointPosition(
		newPosition: PositionValues,
		closestMatrixPosition: IMatrixPosition,
		exactMatches: Map<string, IMatrixPosition>
	): IEndPointPosition {
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
		const numberOfNonZeroPositions           = closestMatrixPosition.numNonZeroPos

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
					alignScore < 0
					|| (numberOfNonZeroPositions < 3
					&& (numInRangePositions !== numberOfNonZeroPositions
						|| numOutOfRangePositions))
				) {
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
				let [numberOfDimensionShifts, shiftScore] = this.getDimensionShift(
					verticalMatrixShift as MatrixPositionShift,
					horizontalMatrixShift as MatrixPositionShift)
				if (this.positionIsABetterMatch(
					matrixPositionMatch,
					alignScore,
					shiftScore,
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
						shiftScore,
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
		newMatrixShiftScore: MatrixShiftScore,
		newDistance: DistanceFromClosestMatrixPosition,
		newNumberOfDimensionShifts: NumberOfDimensionShifts
	): boolean {
		return !preivousMatrixPositionMatch
			|| secondInPairIsGreater([
				[preivousMatrixPositionMatch.alignScore, newAlignScore],
				[newMatrixShiftScore, preivousMatrixPositionMatch.shiftScore],
				[newDistance, preivousMatrixPositionMatch.dist],
				[newNumberOfDimensionShifts, preivousMatrixPositionMatch.dimShifts]
			])
	}

	private getDimensionShift(
		verticalMatrixShift: MatrixPositionShift,
		horizontalMatrixShift: MatrixPositionShift,
	): [NumberOfDimensionShifts, MatrixShiftScore] {
		let verticalCellDifference   = Math.abs(verticalMatrixShift)
		let horizontalCellDifference = Math.abs(horizontalMatrixShift)
		let verticalDimensionShift   = verticalCellDifference ? 1 : 0
		let horizontalDimensionShift = horizontalCellDifference ? 1 : 0

		return [
			verticalDimensionShift + horizontalDimensionShift as NumberOfDimensionShifts,
			verticalCellDifference + horizontalCellDifference as MatrixShiftScore
		]
	}

	/*
		private get1DOffsetFinalPosition(
			newPosition: PositionValues,
			closestMatrixPosition: IMatrixPosition,
			endPoint: IMatrixPositionMatch
		): IFinalPosition {
			let separation  = this.get1DDegreeSeparation(closestMatrixPosition, endPoint)
			let stepDegrees = STEP_DEGS
			switch (endPoint.iShift) {
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
					switch (endPoint.jShift) {
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
			endPoint: IMatrixPositionMatch
		): number {
			const nextClosestCellValues = VALUE_MATRICES[2]
				[this.base72Pos(closestMatrixPosition.iShift, endPoint.iShift)]
				[this.base72Pos(closestMatrixPosition.jShift, endPoint.jShift)]
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

			return Math.round((maxDistance - endPoint.dist) / increment)
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
		// 	[(closestMatrixPosition.iShift + endPoint.iShift) % numberOfMatrixDivisions]
		// 	[(closestMatrixPosition.jShift + endPoint.jShift) % numberOfMatrixDivisions]
		// const closestCellValues    = closestMatrixPosition.values

		let iDistance = directionVectorMatch.dimDists[largestIDistIndex]
		let iRatio    = largestIDist ? 1 - iDistance / largestIDist : 0
		let jDistance = directionVectorMatch.dimDists[largestJDistIndex]
		let jRatio    = largestJDist ? 1 - jDistance / largestJDist : 0

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
