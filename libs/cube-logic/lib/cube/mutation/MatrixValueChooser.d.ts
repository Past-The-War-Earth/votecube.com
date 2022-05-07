import { ICubeUtils } from '../../utils/CubeUtils';
import { ICubeMoveMatrix } from '../CubeMoveMatrix';
import { IViewport } from '../Viewport';
import { IMatrixPosition } from './types';
export interface IMatrixValueChooser {
    getClosestMatrixPosition(): IMatrixPosition;
}
export declare class MatrixValueChooser implements IMatrixValueChooser {
    cubeMoveMatrix: ICubeMoveMatrix;
    cubeUtils: ICubeUtils;
    viewport: IViewport;
    getClosestMatrixPosition(): IMatrixPosition;
    private getClosestPositionByDistanceAndMedian;
    private getZeroedPositions;
    private setDimZeroPositions;
    private getDimensionDistance;
}
//# sourceMappingURL=MatrixValueChooser.d.ts.map