var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Inject, Injected } from '@airport/direction-indicator';
const MAX_DIST = 12;
let MatrixValueChooser = class MatrixValueChooser {
    getClosestMatrixPosition() {
        const x = this.viewport.pd.x;
        if (x.value === 100
            && x.outcome === 'B') {
            return {
                // FIXME: errored out in this position
                // i: 30,
                // j: 36,
                i: 20,
                j: 36,
                values: this.cubeMoveMatrix.VALUE_MATRIX[20][36]
            };
        }
        const positionsWithZeroes = this.getZeroedPositions();
        const matrixPosition = this.getClosestPositionByDistanceAndMedian(positionsWithZeroes);
        matrixPosition.numNonZeroPos = 0;
        for (let k = 0; k < this.cubeMoveMatrix.NUM_VALS; k++) {
            if (!positionsWithZeroes[k]) {
                matrixPosition.numNonZeroPos++;
            }
        }
        return matrixPosition;
    }
    getClosestPositionByDistanceAndMedian(positionsWithZeroes) {
        // need to find the percentages that best endPoint the specified ones
        const valueMatrix = this.cubeMoveMatrix.VALUE_MATRIX;
        const newPositionData = this.viewport.pd;
        let lowestLargest = 50;
        let lowestMedian = 33;
        let lowestSum = 100;
        let currentlyUpsideDown = 1;
        let position;
        for (let i = 0; i < valueMatrix.length; i++) {
            const dimensionMatrix = valueMatrix[i];
            value_loop: for (let j = 0; j < dimensionMatrix.length; j++) {
                const values = dimensionMatrix[j];
                for (let k = 0; k < this.cubeMoveMatrix.NUM_VALS; k++) {
                    if (positionsWithZeroes[k]) {
                        if (values[k]) {
                            continue value_loop;
                        }
                    }
                    else {
                        if (!values[k]) {
                            continue value_loop;
                        }
                    }
                }
                const xDistance = this.getDimensionDistance(newPositionData.x, values, 0, 5, positionsWithZeroes);
                if (xDistance === undefined) {
                    continue;
                }
                const yDistance = this.getDimensionDistance(newPositionData.y, values, 1, 3, positionsWithZeroes);
                if (yDistance === undefined) {
                    continue;
                }
                const zDistance = this.getDimensionDistance(newPositionData.z, values, 2, 4, positionsWithZeroes);
                if (zDistance === undefined) {
                    continue;
                }
                const sortedValues = [xDistance, yDistance, zDistance].sort();
                const median = sortedValues[1];
                const largest = sortedValues[2];
                const sum = xDistance + yDistance + zDistance;
                const upsideDown = i > 18 && i < 54 ? 1 : 0;
                if (this.cubeUtils.secondIsGreaterShortCircuit([
                    [sum, lowestSum],
                    [median, lowestMedian],
                    [largest, lowestLargest],
                    [upsideDown, currentlyUpsideDown]
                ])) {
                    lowestLargest = largest;
                    lowestMedian = median;
                    lowestSum = sum;
                    currentlyUpsideDown = upsideDown;
                    position = {
                        i,
                        j,
                        values
                    };
                }
            }
        }
        return position;
    }
    getZeroedPositions() {
        const positionData = this.viewport.pd;
        const zeroedPositions = [];
        this.setDimZeroPositions(positionData.x, 0, 5, zeroedPositions);
        this.setDimZeroPositions(positionData.y, 1, 3, zeroedPositions);
        this.setDimZeroPositions(positionData.z, 2, 4, zeroedPositions);
        return zeroedPositions;
    }
    setDimZeroPositions(agreementDimension, plusIndex, minusIndex, zeroedPositions) {
        if (agreementDimension.value) {
            if (agreementDimension.outcome === 'A') {
                zeroedPositions[minusIndex] = true;
            }
            else {
                zeroedPositions[plusIndex] = true;
            }
        }
        else {
            zeroedPositions[plusIndex] = true;
            zeroedPositions[minusIndex] = true;
        }
    }
    getDimensionDistance(newAgreementDimension, positionData, positiveIndex, negativeIndex, positionsWithZeroes) {
        let positiveDistance = 0;
        const maximumDistance = MAX_DIST;
        if (!positionsWithZeroes[positiveIndex]) {
            positiveDistance = Math.abs(positionData[positiveIndex]
                - newAgreementDimension.value);
            if (positiveDistance > maximumDistance) {
                return undefined;
            }
        }
        let negativeDistance = 0;
        if (!positionsWithZeroes[negativeIndex]) {
            negativeDistance = Math.abs(positionData[negativeIndex]
                - newAgreementDimension.value);
            if (negativeDistance > maximumDistance) {
                return undefined;
            }
        }
        return (positiveDistance > negativeDistance
            ? positiveDistance
            : negativeDistance);
    }
};
__decorate([
    Inject()
], MatrixValueChooser.prototype, "cubeMoveMatrix", void 0);
__decorate([
    Inject()
], MatrixValueChooser.prototype, "cubeUtils", void 0);
__decorate([
    Inject()
], MatrixValueChooser.prototype, "viewport", void 0);
MatrixValueChooser = __decorate([
    Injected()
], MatrixValueChooser);
export { MatrixValueChooser };
//# sourceMappingURL=MatrixValueChooser.js.map