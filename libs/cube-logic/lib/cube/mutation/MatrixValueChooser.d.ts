import { ICubeUtils } from '../../utils/CubeUtils';
import { ICubeMoveMatrix } from '../CubeMoveMatrix';
import { IViewport } from '../Viewport';
import { IMatrixPosition } from './types';
export interface IMatrixValueChooser {
    getClosestMatrixPosition(viewport: IViewport, cubeUtils: ICubeUtils, cubeMoveMatrix: ICubeMoveMatrix): IMatrixPosition;
}
export declare class MatrixValueChooser implements IMatrixValueChooser {
    getClosestMatrixPosition(viewport: IViewport, cubeUtils: ICubeUtils, cubeMoveMatrix: ICubeMoveMatrix): IMatrixPosition;
    private getClosestPositionByDistanceAndMedian;
    private getZeroedPositions;
    private setDimZeroPositions;
    private getDimensionDistance;
}
