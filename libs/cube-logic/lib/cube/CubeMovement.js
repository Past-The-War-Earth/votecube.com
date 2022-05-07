var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Inject, Injected } from '@airport/direction-indicator';
export var Bool;
(function (Bool) {
    Bool[Bool["False"] = 0] = "False";
    Bool[Bool["True"] = 1] = "True";
})(Bool || (Bool = {}));
export var Move;
(function (Move) {
    Move[Move["Down"] = -1] = "Down";
    Move[Move["None"] = 0] = "None";
    Move[Move["Up"] = 1] = "Up";
})(Move || (Move = {}));
let CubeMovement = class CubeMovement {
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
    getMatrixIdxFromDeg(rotationDegrees) {
        const signedMatrixIndex = Math.floor(rotationDegrees % 360 / this.cubeMoveMatrix.STEP_DEGS);
        return this.normMatrixIdx(signedMatrixIndex);
    }
    moveCoordinates(
    // zoomIndex: ZoomIndex,
    currentDegree, move) {
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
        const degreeChange = this.cubeMoveMatrix.STEP_DEGS;
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
        );
        return [rotation, matrixIndex];
    }
    normMatrixIdx(signedMatrixIndex) {
        const numberOfMatrixDivisions = this.cubeMoveMatrix.NUM_DIVISIONS;
        let normalizedMatrixIndex = signedMatrixIndex;
        if (signedMatrixIndex < 0) {
            normalizedMatrixIndex = numberOfMatrixDivisions + signedMatrixIndex;
        }
        return (normalizedMatrixIndex % numberOfMatrixDivisions);
    }
};
__decorate([
    Inject()
], CubeMovement.prototype, "cubeMoveMatrix", void 0);
CubeMovement = __decorate([
    Injected()
], CubeMovement);
export { CubeMovement };
//# sourceMappingURL=CubeMovement.js.map