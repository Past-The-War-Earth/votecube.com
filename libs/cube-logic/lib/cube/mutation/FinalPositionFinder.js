import { DI } from '@airport/di';
import { FINAL_POSITION_FINDER } from '../../tokens';
export class FinalPositionFinder {
    findFinalPosition(closestMatrixPosition, viewport, cubeUtils, cubeMoveMatrix, cubeMovement) {
        const positionData = viewport.pd;
        const [xPos, xNeg] = this.getDirectionVals(positionData.x);
        const [yPos, yNeg] = this.getDirectionVals(positionData.y);
        const [zPos, zNeg] = this.getDirectionVals(positionData.z);
        const newPosition = [
            xPos,
            yPos,
            zPos,
            yNeg,
            zNeg,
            xNeg,
        ];
        const matrixStepDegrees = cubeMoveMatrix.STEP_DEGS;
        if (this.matrixPositionsMatch(closestMatrixPosition.values, newPosition, cubeMoveMatrix)) {
            return {
                x: closestMatrixPosition.i * matrixStepDegrees,
                y: closestMatrixPosition.j * matrixStepDegrees
            };
        }
        const vectorPosition = {
            endPoint: {
                alignScore: -1,
                dist: 100
            },
            exactMatches: new Map()
        };
        this.findVectorEndPoint({}, newPosition, closestMatrixPosition, vectorPosition, cubeUtils, cubeMoveMatrix, cubeMovement);
        const directionVectorMatch = vectorPosition.endPoint;
        return this.get2DOffsetFinalPosition(closestMatrixPosition, directionVectorMatch, cubeMoveMatrix);
    }
    getDirectionVals(solutionDimension) {
        return solutionDimension.outcome === 'A'
            ? [solutionDimension.value, 0]
            : [0, solutionDimension.value];
    }
    findVectorEndPoint(processedMatches, newPosition, closestMatrixPosition, vectorPosition, cubeUtils, cubeMoveMatrix, cubeMovement) {
        const closestMatrixPositionKey = closestMatrixPosition.i + ':' + closestMatrixPosition.j;
        closestMatrixPosition.key = closestMatrixPositionKey;
        vectorPosition.exactMatches.set(closestMatrixPositionKey, closestMatrixPosition);
        const endPointPosition = this.findEndPointPosition(newPosition, closestMatrixPosition, vectorPosition.exactMatches, cubeUtils, cubeMoveMatrix, cubeMovement);
        closestMatrixPosition.done = true;
        const newMatch = endPointPosition.match;
        if (this.positionIsABetterMatch(vectorPosition.endPoint, newMatch.alignScore, newMatch.shiftScore, newMatch.dist, newMatch.dimShifts, cubeUtils)) {
            vectorPosition.endPoint = newMatch;
        }
        for (const [key, exactMatchPosition] of vectorPosition.exactMatches) {
            if (!exactMatchPosition.done) {
                this.findVectorEndPoint(processedMatches, newPosition, exactMatchPosition, vectorPosition, cubeUtils, cubeMoveMatrix, cubeMovement);
            }
        }
    }
    matrixPositionsMatch(vals1, vals2, cubeMoveMatrix) {
        for (let i = 0; i < cubeMoveMatrix.NUM_VALS; i++) {
            if (vals1[i] !== vals2[i]) {
                return false;
            }
        }
        return true;
    }
    findEndPointPosition(newPosition, closestMatrixPosition, exactMatches, cubeUtils, cubeMoveMatrix, cubeMovement) {
        const numValuesInArray = cubeMoveMatrix.NUM_VALS;
        let dimensionMismatchInClosestPosition = false;
        const closestValues = closestMatrixPosition.values;
        const directionFromClosestPosition = [];
        for (let k = 0; k < numValuesInArray; k++) {
            if (!!closestValues[k] !== !!newPosition[k]) {
                // TODO: see if this is necessary
                dimensionMismatchInClosestPosition = true;
            }
            directionFromClosestPosition[k] = this.getPositionDiffDirection(newPosition, closestValues, k);
        }
        let matrixPositionMatch;
        const neighborDists = [[], [], [], [], [], []];
        neighborDists[-1] = [];
        neighborDists[-2] = [];
        neighborDists[-3] = [];
        neighborDists[-4] = [];
        neighborDists[-5] = [];
        const numberOfNonZeroPositions = closestMatrixPosition.numNonZeroPos;
        for (let verticalMatrixShift = -5; verticalMatrixShift <= 5; verticalMatrixShift++) {
            position_loop: for (let horizontalMatrixShift = -5; horizontalMatrixShift <= 5; horizontalMatrixShift++) {
                if (verticalMatrixShift === 0 && horizontalMatrixShift === 0) {
                    continue;
                }
                const neighborI = this.base72Pos(closestMatrixPosition.i, verticalMatrixShift, cubeMoveMatrix, cubeMovement);
                const neighborJ = this.base72Pos(closestMatrixPosition.j, horizontalMatrixShift, cubeMoveMatrix, cubeMovement);
                const neighborPositionKey = neighborI + ':' + neighborJ;
                if (exactMatches.has(neighborPositionKey)) {
                    continue;
                }
                const values = cubeMoveMatrix.VALUE_MATRIX[neighborI][neighborJ];
                let maxDistance = 0;
                const neighborDistance = {
                    dist: maxDistance,
                    maxDistIndex: null,
                    valueDists: []
                };
                neighborDists[verticalMatrixShift][horizontalMatrixShift] = neighborDistance;
                let exactMatch = true;
                let numInRangePositions = 0;
                let numOutOfRangePositions = 0;
                for (let k = 0; k < numValuesInArray; k++) {
                    const currentValue = values[k];
                    if (closestValues[k] !== currentValue) {
                        exactMatch = false;
                    }
                    // 17 82 1
                    const directionFromNeighbor = this.getPositionDiffDirection(newPosition, values, k);
                    if (!currentValue && !newPosition[k]) {
                        // positions are either not applicable or are equal => does not count
                    }
                    else {
                        const directionFromClosest = directionFromClosestPosition[k];
                        if (!directionFromClosest) {
                            numInRangePositions++;
                        }
                        else if (directionFromClosest === directionFromNeighbor) {
                            numOutOfRangePositions++;
                        }
                        else {
                            numInRangePositions++;
                        }
                    }
                }
                if (exactMatch) {
                    exactMatches.set(neighborPositionKey, {
                        i: neighborI,
                        j: neighborJ,
                        key: neighborPositionKey,
                        values
                    });
                    continue;
                }
                const alignScore = numInRangePositions
                    - numOutOfRangePositions;
                if (alignScore < 0
                    || (numberOfNonZeroPositions < 3
                        && (numInRangePositions !== numberOfNonZeroPositions
                            || numOutOfRangePositions))) {
                    continue;
                }
                const dimDists = [];
                for (let k = 0; k < numValuesInArray; k++) {
                    const currentDistance = Math.abs(newPosition[k]
                        - values[k]);
                    neighborDistance.valueDists.push(currentDistance);
                    dimDists.push(currentDistance);
                    if (currentDistance > maxDistance) {
                        maxDistance = currentDistance;
                        neighborDistance.dist = maxDistance;
                        neighborDistance.maxDistIndex = k;
                    }
                }
                const [numberOfDimensionShifts, shiftScore] = this.getDimensionShift(verticalMatrixShift, horizontalMatrixShift);
                if (this.positionIsABetterMatch(matrixPositionMatch, alignScore, shiftScore, maxDistance, numberOfDimensionShifts, cubeUtils)) {
                    matrixPositionMatch = {
                        alignScore,
                        dimDists,
                        dimShifts: numberOfDimensionShifts,
                        dist: maxDistance,
                        iShift: verticalMatrixShift,
                        jShift: horizontalMatrixShift,
                        shiftScore,
                        values
                    };
                }
            }
        }
        return {
            match: matrixPositionMatch,
            neighborDists
        };
    }
    positionIsABetterMatch(preivousMatrixPositionMatch, newAlignScore, newMatrixShiftScore, newDistance, newNumberOfDimensionShifts, cubeUtils) {
        return !preivousMatrixPositionMatch
            || cubeUtils.secondIsGreaterShortCircuit([
                [preivousMatrixPositionMatch.alignScore, newAlignScore],
                [newMatrixShiftScore, preivousMatrixPositionMatch.shiftScore],
                [newDistance, preivousMatrixPositionMatch.dist],
                [newNumberOfDimensionShifts, preivousMatrixPositionMatch.dimShifts]
            ]);
    }
    getDimensionShift(verticalMatrixShift, horizontalMatrixShift) {
        const verticalCellDifference = Math.abs(verticalMatrixShift);
        const horizontalCellDifference = Math.abs(horizontalMatrixShift);
        const verticalDimensionShift = verticalCellDifference ? 1 : 0;
        const horizontalDimensionShift = horizontalCellDifference ? 1 : 0;
        return [
            verticalDimensionShift + horizontalDimensionShift,
            verticalCellDifference + horizontalCellDifference
        ];
    }
    get2DOffsetFinalPosition(
    // newPosition: PositionValues,
    closestMatrixPosition, directionVectorMatch, cubeMoveMatrix) {
        // 0 & 5 determine x movement
        // 1,2,3,4 determine y movement
        // need to take the distances from newPosition and apply them accordingly
        const separations = this.get2DDegreeSeparations(closestMatrixPosition, directionVectorMatch, cubeMoveMatrix);
        const stepDegrees = cubeMoveMatrix.STEP_DEGS;
        return {
            x: this.getFinalPositionOfDimension(closestMatrixPosition.i * stepDegrees, directionVectorMatch.iShift, separations.i),
            y: this.getFinalPositionOfDimension(closestMatrixPosition.j * stepDegrees, directionVectorMatch.jShift, separations.j)
        };
    }
    getFinalPositionOfDimension(closestMatrixPositionDegrees, separationPositionShift, separation) {
        // TODO: see if this should be > 0, with a special case for === 0
        if (separationPositionShift >= 0) {
            closestMatrixPositionDegrees += separation > 0
                ? separation
                : -separation;
            // } else if (separationDirection === -1) {
        }
        else {
            closestMatrixPositionDegrees -= separation > 0
                ? separation
                : -separation;
        }
        return closestMatrixPositionDegrees;
    }
    get2DDegreeSeparations(closestMatrixPosition, directionVectorMatch, cubeMoveMatrix) {
        const cellSeparationDistances = this.getDirectionalDists(closestMatrixPosition, directionVectorMatch.values, cubeMoveMatrix);
        const [largestIDistIndex, largestIDist] = this.getLargestDistAndIdx([0, 5], cellSeparationDistances);
        const [largestJDistIndex, largestJDist] = this.getLargestDistAndIdx([1, 2, 3, 4], cellSeparationDistances);
        const iDistance = directionVectorMatch.dimDists[largestIDistIndex];
        const iRatio = largestIDist ? 1 - iDistance / largestIDist : 0;
        const jDistance = directionVectorMatch.dimDists[largestJDistIndex];
        const jRatio = largestJDist ? 1 - jDistance / largestJDist : 0;
        return {
            i: this.getDegreeShift(directionVectorMatch.iShift, iRatio, cubeMoveMatrix),
            j: this.getDegreeShift(directionVectorMatch.jShift, jRatio, cubeMoveMatrix)
        };
    }
    getDegreeShift(matrixCellShift, ratio, cubeMoveMatrix) {
        const matrixStepDegrees = cubeMoveMatrix.STEP_DEGS;
        let exactShift;
        // if (matrixCellShift) {
        exactShift = (matrixStepDegrees * matrixCellShift) * ratio;
        // } else {
        // 	exactShift = matrixStepDegrees * ratio
        // }
        return Math.round(exactShift);
    }
    getDirectionalDists(closestMatrixPosition, directionVectorPositionValues, cubeMoveMatrix) {
        const distances = [];
        for (let k = 0; k < cubeMoveMatrix.NUM_VALS; k++) {
            const currentDistance = Math.abs(directionVectorPositionValues[k]
                - closestMatrixPosition.values[k]);
            distances.push(currentDistance);
        }
        return distances;
    }
    getLargestDistAndIdx(indexes, dists) {
        let largestDist;
        let largestDistIndex;
        for (const index of indexes) {
            const dist = dists[index];
            if (!largestDist || largestDist < dist) {
                largestDist = dist;
                largestDistIndex = index;
            }
        }
        return [largestDistIndex, largestDist];
    }
    base72Pos(matrixPosition, offset, cubeMoveMatrix, cubeMovement) {
        const base72Position = (matrixPosition + offset) % cubeMoveMatrix.NUM_DIVISIONS;
        return cubeMovement.normMatrixIdx(base72Position, cubeMoveMatrix);
    }
    getPositionDiffDirection(from, to, index) {
        let direction = 0;
        const positionDifference = from[index] - to[index];
        if (positionDifference > 0) {
            direction = 1;
        }
        else if (positionDifference < 0) {
            direction = -1;
        }
        return direction;
    }
}
DI.set(FINAL_POSITION_FINDER, FinalPositionFinder);
//# sourceMappingURL=FinalPositionFinder.js.map