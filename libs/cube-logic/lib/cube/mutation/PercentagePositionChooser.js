var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Inject, Injected } from '@airport/direction-indicator';
let PercentagePositionChooser = class PercentagePositionChooser {
    setPositionPercentages(dimension, percent, outcome) {
        const positionData = this.viewport.pd;
        if (percent && !outcome) {
            outcome = 'A';
        }
        else if (outcome && !percent) {
            outcome = null;
        }
        positionData[dimension].value = percent;
        positionData[dimension].outcome = outcome;
        this.adjustDimensions(dimension);
    }
    changePositionPercentages(dimension, percentChange, outcome) {
        this.updateDimensionPercent(dimension, percentChange, outcome);
        this.adjustDimensions(dimension);
    }
    updateDimensionPercent(dimension, percentChange, outcome) {
        const dimensionPositionData = this.viewport.pd[dimension];
        if (dimensionPositionData.outcome !== outcome) {
            const existingValueToDecrease = dimensionPositionData.value;
            const decreasedValue = existingValueToDecrease - percentChange;
            if (decreasedValue > 0) {
                dimensionPositionData.value = decreasedValue;
            }
            else if (decreasedValue === 0) {
                dimensionPositionData.value = 0;
                dimensionPositionData.outcome = null;
            }
            else {
                dimensionPositionData.value = -decreasedValue;
                dimensionPositionData.outcome = outcome;
            }
        }
        else if (!dimensionPositionData.value) {
            dimensionPositionData.value = percentChange;
        }
        else {
            // No decrease is necessary, user is clicking on a button
            // that has a value associated with it
            const increasedValue = dimensionPositionData.value + percentChange;
            if (increasedValue < 100) {
                dimensionPositionData.value = increasedValue;
            }
            else {
                dimensionPositionData.value = 100;
            }
        }
    }
    adjustDimensions(dimension) {
        const positionData = this.viewport.pd;
        const newChangedDimensionValue = this.viewport.pd[dimension].value;
        let i = -1;
        const dimensionToPreserve = this.getDimensionToPreserve(dimension);
        const dimensionToMove = this.getDimensionToMove(dimension, dimensionToPreserve);
        const otherDimensions = [dimensionToMove, dimensionToPreserve];
        let otherDimensionValues;
        let totalValue;
        do {
            otherDimensionValues = [
                this.viewport.pd[dimensionToMove].value,
                this.viewport.pd[dimensionToPreserve].value
            ];
            totalValue = newChangedDimensionValue + otherDimensionValues[0] + otherDimensionValues[1];
            if (totalValue === 100) {
                return;
            }
            i++;
        } while (this.adjustDimension(positionData, otherDimensions[i], otherDimensionValues[i], totalValue));
    }
    adjustDimension(positionData, dimension, currentDimensionValue, totalValue) {
        const dimensionPositionData = positionData[dimension];
        if (totalValue > 100) {
            const reduceBy = totalValue - 100;
            if (currentDimensionValue >= reduceBy) {
                dimensionPositionData.value -= reduceBy;
                return false;
            }
            dimensionPositionData.value = 0;
            dimensionPositionData.outcome = null;
            return true;
        }
        // total value < 100
        const increaseBy = 100 - totalValue;
        if (!dimensionPositionData.outcome) {
            dimensionPositionData.outcome = 'A';
        }
        if (currentDimensionValue + increaseBy <= 100) {
            dimensionPositionData.value += increaseBy;
            return false;
        }
        dimensionPositionData.value = 100;
        return true;
    }
    getDimensionToPreserve(dimension) {
        if (this.viewport.rmd.length > 1) {
            return this.viewport.rmd[1];
        }
        // If the order between the dimensions is the same, use the top-to-bottom
        // order of the displayed controls
        // 1) 0-5 - x
        // 2) 2-4 - z
        // 3) 1-3 - y
        switch (dimension) {
            case 'x':
                return 'z';
            case 'y':
            case 'z':
                return 'x';
        }
    }
    getDimensionToMove(changedDimension, dimensionToPreserve) {
        switch (changedDimension) {
            case 'x':
                switch (dimensionToPreserve) {
                    case 'y':
                        return 'z';
                    case 'z':
                        return 'y';
                }
            case 'y':
                switch (dimensionToPreserve) {
                    case 'x':
                        return 'z';
                    case 'z':
                        return 'x';
                }
            case 'z':
                switch (dimensionToPreserve) {
                    case 'x':
                        return 'y';
                    case 'y':
                        return 'x';
                }
        }
    }
};
__decorate([
    Inject()
], PercentagePositionChooser.prototype, "viewport", void 0);
PercentagePositionChooser = __decorate([
    Injected()
], PercentagePositionChooser);
export { PercentagePositionChooser };
//# sourceMappingURL=PercentagePositionChooser.js.map