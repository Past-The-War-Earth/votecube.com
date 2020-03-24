"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const tokens_1 = require("../../tokens");
class DegreePositionChooser {
    setFinalDegrees(finalPosition, viewport) {
        viewport.x = this.getDimDegrees(viewport.x, finalPosition.x);
        viewport.y = this.getDimDegrees(viewport.y, finalPosition.y);
        viewport.moveToDegree();
    }
    getDimDegrees(currentDegrees, newDegreeChange) {
        let rotationMultiplier = Math.floor(Math.abs(currentDegrees / 360));
        if (currentDegrees < 0) {
            rotationMultiplier = -rotationMultiplier;
        }
        // if (currentDegrees < 180 && newDegreeChange > 180) {
        // 	newDegreeChange -= 360
        // }
        return rotationMultiplier * 360 + newDegreeChange;
    }
}
exports.DegreePositionChooser = DegreePositionChooser;
di_1.DI.set(tokens_1.DEGREE_POSITION_CHOOSER, DegreePositionChooser);
//# sourceMappingURL=DegreePositionChooser.js.map