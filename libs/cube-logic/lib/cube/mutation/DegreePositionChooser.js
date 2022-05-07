var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Inject, Injected } from '@airport/direction-indicator';
let DegreePositionChooser = class DegreePositionChooser {
    setFinalDegrees(finalPosition) {
        this.viewport.x = this.getDimDegrees(this.viewport.x, finalPosition.x);
        this.viewport.y = this.getDimDegrees(this.viewport.y, finalPosition.y);
        this.viewport.moveToDegree();
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
};
__decorate([
    Inject()
], DegreePositionChooser.prototype, "viewport", void 0);
DegreePositionChooser = __decorate([
    Injected()
], DegreePositionChooser);
export { DegreePositionChooser };
//# sourceMappingURL=DegreePositionChooser.js.map