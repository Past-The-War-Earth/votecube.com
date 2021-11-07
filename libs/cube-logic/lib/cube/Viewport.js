import { container, DI } from '@airport/di';
import { CUBE_MOVE_MATRIX, CUBE_MOVEMENT, VIEWPORT } from '../tokens';
import { MoveIncrement } from './CubeMoveMatrix';
export class Viewport {
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
        container(this).get(CUBE_MOVE_MATRIX).then(cubeMoveMatrix => {
            this.increment = cubeMoveMatrix.MOVE_INCREMENTS[zoomIndex];
            console.log('TODO: implement');
        });
    }
    move(moveX, xBy, moveY, yBy) {
        container(this).get(CUBE_MOVE_MATRIX, CUBE_MOVEMENT).then(([cubeMoveMatrix, cubeMovement]) => {
            if (!Object.keys(this.el).length) {
                return;
            }
            if (!moveX && !moveY) {
                return;
            }
            let xi;
            let yi;
            if (moveX) {
                [this.x, xi] = cubeMovement.moveCoordinates(
                // this.zm,
                this.x, xBy, cubeMoveMatrix);
            }
            else {
                xi = cubeMovement.getMatrixIdxFromDeg(this.x, cubeMoveMatrix);
            }
            if (moveY) {
                [this.y, yi] = cubeMovement.moveCoordinates(
                // this.zm,
                this.y, yBy, cubeMoveMatrix);
            }
            else {
                yi = cubeMovement.getMatrixIdxFromDeg(this.y, cubeMoveMatrix);
            }
            const values = cubeMoveMatrix.VALUE_MATRIX[xi][yi];
            function getDimensionState(positivePosition, negativePosition, positionValues, solutionDimension) {
                let outcome = 'A';
                let value = positionValues[positivePosition];
                if (positionValues[negativePosition]) {
                    outcome = 'B';
                    value = positionValues[negativePosition];
                }
                else if (!value) {
                    outcome = null;
                }
                solutionDimension.outcome = outcome;
                solutionDimension.valid = true;
                solutionDimension.value = value;
            }
            getDimensionState(0, 5, values, this.pd.x);
            getDimensionState(1, 3, values, this.pd.y);
            getDimensionState(2, 4, values, this.pd.z);
            this.moveToDegree();
        });
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
}
DI.set(VIEWPORT, Viewport);
//# sourceMappingURL=Viewport.js.map