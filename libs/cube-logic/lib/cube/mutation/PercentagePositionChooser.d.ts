import { PositionPercent } from '../CubeMovement';
import { Dimension, IViewport } from '../Viewport';
import { Outcome_Ordinal, PercentChange } from './types';
export interface IPercentagePositionChooser {
    changePositionPercentages(dimension: Dimension, percentChange: PercentChange, outcome: Outcome_Ordinal): void;
    setPositionPercentages(dimension: Dimension, percent: PositionPercent, outcome: Outcome_Ordinal): void;
}
export declare class PercentagePositionChooser implements IPercentagePositionChooser {
    viewport: IViewport;
    setPositionPercentages(dimension: Dimension, percent: PositionPercent, outcome: Outcome_Ordinal): void;
    changePositionPercentages(dimension: Dimension, percentChange: PercentChange, outcome: Outcome_Ordinal): void;
    private updateDimensionPercent;
    private adjustDimensions;
    private adjustDimension;
    private getDimensionToPreserve;
    private getDimensionToMove;
}
//# sourceMappingURL=PercentagePositionChooser.d.ts.map