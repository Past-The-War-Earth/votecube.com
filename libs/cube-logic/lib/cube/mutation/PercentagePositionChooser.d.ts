import { Outcome_Ordinal } from '@votecube/model';
import { PositionPercent } from '../CubeMovement';
import { Dimension, IViewport } from '../Viewport';
import { PercentChange } from './types';
export interface IPercentagePositionChooser {
    changePositionPercentages(dimension: Dimension, percentChange: PercentChange, outcome: Outcome_Ordinal, viewport: IViewport): void;
    setPositionPercentages(dimension: Dimension, percent: PositionPercent, outcome: Outcome_Ordinal, viewport: IViewport): void;
}
export declare class PercentagePositionChooser implements IPercentagePositionChooser {
    setPositionPercentages(dimension: Dimension, percent: PositionPercent, outcome: Outcome_Ordinal, viewport: IViewport): void;
    changePositionPercentages(dimension: Dimension, percentChange: PercentChange, outcome: Outcome_Ordinal, viewport: IViewport): void;
    private updateDimensionPercent;
    private adjustDimensions;
    private adjustDimension;
    private getDimensionToPreserve;
    private getDimensionToMove;
}
