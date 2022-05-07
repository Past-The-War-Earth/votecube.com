import { IViewport } from '../Viewport';
import { IFinalPosition } from './types';
export interface IDegreePositionChooser {
    setFinalDegrees(finalPosition: IFinalPosition): void;
}
export declare class DegreePositionChooser implements IDegreePositionChooser {
    viewport: IViewport;
    setFinalDegrees(finalPosition: IFinalPosition): void;
    private getDimDegrees;
}
//# sourceMappingURL=DegreePositionChooser.d.ts.map