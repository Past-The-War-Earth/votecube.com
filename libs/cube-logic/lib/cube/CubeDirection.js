"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const tokens_1 = require("../tokens");
class CubeDirection {
    getMove(startCoords, endCoords) {
        let dx, dy, vx, vy, moveX = 0, xBy = 0, moveY = 0, yBy = 0;
        // directionChanged = 0
        vx = this.directionVector(startCoords.x, endCoords.x);
        vy = this.directionVector(startCoords.y, endCoords.y);
        dx = vx[1];
        dy = vy[1];
        // console.log(`dx: ${dx}, dy: ${dy}`)
        if (dx >= 2 && dx / 2 > dy) {
            // If general directionVector is in X
            yBy = vx[0];
            moveY = 1;
        }
        else if (dy >= 2 && dy / 2 > dx) {
            // If general directionVector is in Y
            xBy = -vy[0];
            moveX = 1;
        }
        else if (dx >= 2 && dy >= 2) {
            // Otherwise its in both x and y
            xBy = -vy[0];
            yBy = vx[0];
            moveX = 1;
            moveY = 1;
        }
        return {
            moveX,
            moveY,
            xBy,
            yBy
        };
    }
    directionVector(fromPosition, toPosition) {
        let movementDirection;
        let changeInPixels; // , range
        if (toPosition >= 0 && fromPosition >= 0) {
            // range = 1
            if (toPosition >= fromPosition) {
                movementDirection = 1;
                changeInPixels = toPosition - fromPosition;
            }
            else {
                movementDirection = -1;
                changeInPixels = fromPosition - toPosition;
            }
        }
        else {
            // range = -1
            if (toPosition < fromPosition) {
                movementDirection = -1;
                changeInPixels = toPosition - fromPosition;
            }
            else {
                movementDirection = 1;
                changeInPixels = fromPosition - toPosition;
            }
        }
        return [
            movementDirection,
            changeInPixels
            // , range
        ];
    }
}
exports.CubeDirection = CubeDirection;
di_1.DI.set(tokens_1.CUBE_DIRECTION, CubeDirection);
//# sourceMappingURL=CubeDirection.js.map