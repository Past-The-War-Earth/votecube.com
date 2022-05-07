var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { MoveIncrement } from './CubeMoveMatrix';
import { Inject, Injected } from '@airport/direction-indicator';
let Viewport = class Viewport {
    constructor() {
        this.cb = null;
        this.cr = {
            x: 0,
            y: 0
        };
        this.el = {};
        this.increment = MoveIncrement.FIVE;
        this.pd = null;
        // Recently moved factor
        this.rmd = [];
        this.vd = {
            x: 1,
            y: 1,
            z: 1
        };
        this.x = 0;
        this.y = 0;
    }
    // zm: MV_INC_IDX[MoveIncrement.FIFTEEN],
    changeZoom(zoomIndex) {
        this.increment = this.cubeMoveMatrix.MOVE_INCREMENTS[zoomIndex];
        console.log('TODO: implement');
    }
    move(moveX, xBy, moveY, yBy) {
        if (!Object.keys(this.el).length) {
            return;
        }
        if (!moveX && !moveY) {
            return;
        }
        let xi;
        let yi;
        if (moveX) {
            [this.x, xi] = this.cubeMovement.moveCoordinates(
            // this.zm,
            this.x, xBy);
        }
        else {
            xi = this.cubeMovement.getMatrixIdxFromDeg(this.x);
        }
        if (moveY) {
            [this.y, yi] = this.cubeMovement.moveCoordinates(
            // this.zm,
            this.y, yBy);
        }
        else {
            yi = this.cubeMovement.getMatrixIdxFromDeg(this.y);
        }
        const values = this.cubeMoveMatrix.VALUE_MATRIX[xi][yi];
        function getDimensionState(positivePosition, negativePosition, positionValues, agreementDimension) {
            let outcome = 'A';
            let value = positionValues[positivePosition];
            if (positionValues[negativePosition]) {
                outcome = 'B';
                value = positionValues[negativePosition];
            }
            else if (!value) {
                outcome = null;
            }
            agreementDimension.outcome = outcome;
            agreementDimension.valid = true;
            agreementDimension.value = value;
        }
        getDimensionState(0, 5, values, this.pd.x);
        getDimensionState(1, 3, values, this.pd.y);
        getDimensionState(2, 4, values, this.pd.z);
        this.moveToDegree();
    }
    /**
     * Need to be able to move to a particular angle
     */
    moveToDegree() {
        if (!this.cb) {
            return;
        }
        // console.log('x: ' + this.x + '\t\ty: ' + this.y)
        this.cb(this.pd);
        for (const elementId in this.el) {
            this.el[elementId].style.transform = 'rotateX(' + this.x + 'deg) rotateY(' + this.y + 'deg)';
        }
    }
    reset() {
        if (!Object.keys(this.el).length) {
            return;
        }
        this.increment = MoveIncrement.FIVE;
        this.move(0, 0, 0, 0);
    }
};
__decorate([
    Inject()
], Viewport.prototype, "cubeMoveMatrix", void 0);
__decorate([
    Inject()
], Viewport.prototype, "cubeMovement", void 0);
Viewport = __decorate([
    Injected()
], Viewport);
export { Viewport };
//# sourceMappingURL=Viewport.js.map