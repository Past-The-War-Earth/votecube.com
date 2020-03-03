import { IViewport } from '../Viewport';
import { IFinalPosition } from './types';
export interface IDegreePositionChooser {
    setFinalDegrees(finalPosition: IFinalPosition, viewport: IViewport): void;
}
export declare class DegreePositionChooser implements IDegreePositionChooser {
    setFinalDegrees(finalPosition: IFinalPosition, viewport: IViewport): void;
    private getDimDegrees;
}
