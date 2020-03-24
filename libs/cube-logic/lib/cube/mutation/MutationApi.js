"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const tokens_1 = require("../../tokens");
class MutationApi {
    /*	changeZoom(
            zoomIndex: ZoomIndex
        ): void {
            // this.vp.zm = zoomIndex
        }*/
    move(factorNumber, outcome, percentChange) {
        di_1.container(this).get(tokens_1.PERCENTAGE_POSITION_CHOOSER, tokens_1.VIEWPORT).then(([percentagePositionChooser, viewport]) => {
            const dimension = viewport.pd.factorToAxisMapping[factorNumber];
            const dimensionPositionData = viewport.pd[dimension];
            if (dimensionPositionData.value === 100
                && dimensionPositionData.outcome === outcome) {
                return;
            }
            // let percentChange = this.getPercentChange()
            this.moveToPercent(dimension, null, percentagePositionChooser, viewport, percentChange, outcome);
        });
    }
    async moveToValue(factorNumber, value) {
        const [percentagePositionChooser, viewport] = await di_1.container(this).get(tokens_1.PERCENTAGE_POSITION_CHOOSER, tokens_1.VIEWPORT);
        const dimension = viewport.pd.factorToAxisMapping[factorNumber];
        const numericValue = parseInt(value);
        viewport.pd[dimension].valid = !isNaN(value) && numericValue >= 0 && numericValue <= 100;
        if (!viewport.pd[dimension].valid) {
            viewport.cb(viewport.pd);
            return;
        }
        this.moveToPercent(dimension, numericValue, percentagePositionChooser, viewport);
    }
    async toggleSurface(factorNumber) {
        const viewport = await di_1.container(this).get(tokens_1.VIEWPORT);
        const dimension = viewport.pd.factorToAxisMapping[factorNumber];
        const dimensionPositionData = viewport.pd[dimension];
        if (!dimensionPositionData.outcome) {
            dimensionPositionData.outcome = 'A';
        }
        else if (dimensionPositionData.value === 100) {
            dimensionPositionData.outcome = dimensionPositionData.outcome === 'A' ? 'B' : 'A';
        }
        switch (dimension) {
            case 'x': {
                viewport.pd.y.outcome = null;
                viewport.pd.z.outcome = null;
                break;
            }
            case 'y': {
                viewport.pd.x.outcome = null;
                viewport.pd.z.outcome = null;
                break;
            }
            case 'z': {
                viewport.pd.x.outcome = null;
                viewport.pd.y.outcome = null;
                break;
            }
        }
        this.moveToPercent(dimension, 100, null, null);
    }
    async recompute() {
        const [cubeMoveMatrix, cubeMovement, cubeUtils, degreePositionChooser, finalPositionFinder, matrixValueChooser, viewport] = await di_1.container(this).get(tokens_1.CUBE_MOVE_MATRIX, tokens_1.CUBE_MOVEMENT, tokens_1.CUBE_UTILS, tokens_1.DEGREE_POSITION_CHOOSER, tokens_1.FINAL_POSITION_FINDER, tokens_1.MATRIX_VALUE_CHOOSER, tokens_1.VIEWPORT);
        if (!viewport.pd) {
            return;
        }
        const closestMatrixPosition = matrixValueChooser.getClosestMatrixPosition(viewport, cubeUtils, cubeMoveMatrix);
        const finalPosition = finalPositionFinder.findFinalPosition(closestMatrixPosition, viewport, cubeUtils, cubeMoveMatrix, cubeMovement);
        degreePositionChooser.setFinalDegrees(finalPosition, viewport);
    }
    moveToPercent(dimension, newPercent, percentagePositionChooser, viewport, percentChange, outcome) {
        // First see the order of recently moved dimensions
        viewport.rmd = viewport.rmd.filter(changedDim => dimension !== changedDim);
        viewport.rmd.unshift(dimension);
        const numPreviousMoves = viewport.rmd.length;
        if (numPreviousMoves > 3) {
            viewport.rmd.pop();
        }
        if (percentChange) {
            percentagePositionChooser.changePositionPercentages(dimension, percentChange, outcome, viewport);
        }
        else {
            percentagePositionChooser.setPositionPercentages(dimension, newPercent, viewport.pd[dimension].outcome, viewport);
        }
        this.recompute();
    }
}
exports.MutationApi = MutationApi;
di_1.DI.set(tokens_1.MUTATION_API, MutationApi);
//# sourceMappingURL=MutationApi.js.map