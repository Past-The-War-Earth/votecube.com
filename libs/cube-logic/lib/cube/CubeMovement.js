"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const tokens_1 = require("../tokens");
var Bool;
(function (Bool) {
    Bool[Bool["False"] = 0] = "False";
    Bool[Bool["True"] = 1] = "True";
})(Bool = exports.Bool || (exports.Bool = {}));
var Move;
(function (Move) {
    Move[Move["Down"] = -1] = "Down";
    Move[Move["None"] = 0] = "None";
    Move[Move["Up"] = 1] = "Up";
})(Move = exports.Move || (exports.Move = {}));
class CubeMovement {
    constructor() {
        this.mouse = {
            start: { x: undefined, y: undefined }
        };
    }
    /*
    export function getModXAbsRemainder(
        num: number,
        moveIncrement: MoveIncrement
    ): number {
        const axis     = MV_INC_IDX[moveIncrement]
        const divisions = NUM_DIVISIONS[axis]
        let remainder   = num % divisions
        if (remainder < 0) {
            remainder = divisions + remainder
        }

        return remainder
    }
    */
    getMatrixIdxFromDeg(rotationDegrees, cubeMoveMatrix) {
        const signedMatrixIndex = Math.floor(rotationDegrees % 360 / cubeMoveMatrix.STEP_DEGS);
        return this.normMatrixIdx(signedMatrixIndex, cubeMoveMatrix);
    }
    moveCoordinates(
    // zoomIndex: ZoomIndex,
    currentDegree, move, cubeMoveMatrix) {
        // not needed checked higher
        // if (!move) {
        // 	return [currentDegree, null]
        // }
        // let zoomMultiplier = 9
        // if (zoomIndex === 1) {
        // 	zoomMultiplier = 3
        // } else if (zoomIndex === 2) {
        // 	zoomMultiplier = 1
        // }
        const degreeChange = cubeMoveMatrix.STEP_DEGS;
        // * zoomMultiplier
        let zoomedMatrixIndex = Math.floor(currentDegree % 360 / degreeChange);
        const currentDegreeRemainder = currentDegree % degreeChange;
        if (move > 0) {
            zoomedMatrixIndex++;
        }
        else {
            if (!currentDegreeRemainder) {
                zoomedMatrixIndex--;
            }
        }
        let page = Math.floor(currentDegree / 360);
        if (currentDegree < 0) {
            page = -Math.floor(Math.abs(currentDegree) / 360);
        }
        const rotation = page * 360 + zoomedMatrixIndex * degreeChange;
        const matrixIndex = this.normMatrixIdx(zoomedMatrixIndex
        // * zoomMultiplier
        , cubeMoveMatrix);
        return [rotation, matrixIndex];
    }
    normMatrixIdx(signedMatrixIndex, cubeMoveMatrix) {
        const numberOfMatrixDivisions = cubeMoveMatrix.NUM_DIVISIONS;
        let normalizedMatrixIndex = signedMatrixIndex;
        if (signedMatrixIndex < 0) {
            normalizedMatrixIndex = numberOfMatrixDivisions + signedMatrixIndex;
        }
        return (normalizedMatrixIndex % numberOfMatrixDivisions);
    }
}
exports.CubeMovement = CubeMovement;
di_1.DI.set(tokens_1.CUBE_MOVEMENT, CubeMovement);
//# sourceMappingURL=CubeMovement.js.map