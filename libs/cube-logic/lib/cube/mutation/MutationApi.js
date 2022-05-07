var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Inject, Injected } from '@airport/direction-indicator';
let MutationApi = class MutationApi {
    /*	changeZoom(
            zoomIndex: ZoomIndex
        ): void {
            // this.vp.zm = zoomIndex
        }*/
    move(factorNumber, outcome, percentChange) {
        const dimension = this.viewport.pd.factorToAxisMapping[factorNumber];
        const dimensionPositionData = this.viewport.pd[dimension];
        if (dimensionPositionData.value === 100
            && dimensionPositionData.outcome === outcome) {
            return;
        }
        // let percentChange = this.getPercentChange()
        this.moveToPercent(dimension, null, percentChange, outcome);
    }
    async moveToValue(factorNumber, value) {
        const dimension = this.viewport.pd.factorToAxisMapping[factorNumber];
        const numericValue = parseInt(value);
        this.viewport.pd[dimension].valid = !isNaN(value) && numericValue >= 0 && numericValue <= 100;
        if (!this.viewport.pd[dimension].valid) {
            this.viewport.cb(this.viewport.pd);
            return;
        }
        this.moveToPercent(dimension, numericValue);
    }
    async toggleSurface(factorNumber) {
        const dimension = this.viewport.pd.factorToAxisMapping[factorNumber];
        const dimensionPositionData = this.viewport.pd[dimension];
        if (!dimensionPositionData.outcome) {
            dimensionPositionData.outcome = 'A';
        }
        else if (dimensionPositionData.value === 100) {
            dimensionPositionData.outcome = dimensionPositionData.outcome === 'A' ? 'B' : 'A';
        }
        switch (dimension) {
            case 'x': {
                this.viewport.pd.y.outcome = null;
                this.viewport.pd.z.outcome = null;
                break;
            }
            case 'y': {
                this.viewport.pd.x.outcome = null;
                this.viewport.pd.z.outcome = null;
                break;
            }
            case 'z': {
                this.viewport.pd.x.outcome = null;
                this.viewport.pd.y.outcome = null;
                break;
            }
        }
        this.moveToPercent(dimension, 100);
    }
    async recompute() {
        if (!this.viewport.pd) {
            return;
        }
        const closestMatrixPosition = this.matrixValueChooser.getClosestMatrixPosition();
        const finalPosition = this.finalPositionFinder.findFinalPosition(closestMatrixPosition);
        this.degreePositionChooser.setFinalDegrees(finalPosition);
    }
    moveToPercent(dimension, newPercent, percentChange, outcome) {
        // First see the order of recently moved dimensions
        this.viewport.rmd = this.viewport.rmd.filter(changedDim => dimension !== changedDim);
        this.viewport.rmd.unshift(dimension);
        const numPreviousMoves = this.viewport.rmd.length;
        if (numPreviousMoves > 3) {
            this.viewport.rmd.pop();
        }
        if (percentChange) {
            this.percentagePositionChooser.changePositionPercentages(dimension, percentChange, outcome);
        }
        else {
            this.percentagePositionChooser.setPositionPercentages(dimension, newPercent, this.viewport.pd[dimension].outcome);
        }
        this.recompute();
    }
};
__decorate([
    Inject()
], MutationApi.prototype, "cubeMoveMatrix", void 0);
__decorate([
    Inject()
], MutationApi.prototype, "cubeMovement", void 0);
__decorate([
    Inject()
], MutationApi.prototype, "cubeUtils", void 0);
__decorate([
    Inject()
], MutationApi.prototype, "degreePositionChooser", void 0);
__decorate([
    Inject()
], MutationApi.prototype, "eventListenerMap", void 0);
__decorate([
    Inject()
], MutationApi.prototype, "finalPositionFinder", void 0);
__decorate([
    Inject()
], MutationApi.prototype, "matrixValueChooser", void 0);
__decorate([
    Inject()
], MutationApi.prototype, "mutationApi", void 0);
__decorate([
    Inject()
], MutationApi.prototype, "percentagePositionChooser", void 0);
__decorate([
    Inject()
], MutationApi.prototype, "viewport", void 0);
MutationApi = __decorate([
    Injected()
], MutationApi);
export { MutationApi };
//# sourceMappingURL=MutationApi.js.map