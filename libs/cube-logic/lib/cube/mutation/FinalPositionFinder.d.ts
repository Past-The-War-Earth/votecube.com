import { ICubeUtils } from '../../utils/CubeUtils';
import { ICubeMoveMatrix, PositionValues, ValueArrayPosition } from '../CubeMoveMatrix';
import { ICubeMovement } from '../CubeMovement';
import { IViewport } from '../Viewport';
import { DistanceFromClosestMatrixPosition, IFinalPosition, IMatrixPosition, PositionAlignmentScore } from './types';
export interface INeighborDistance {
    valueDists: DistanceFromClosestMatrixPosition[];
    dist: DistanceFromClosestMatrixPosition;
    maxDistIndex: ValueArrayPosition;
}
export interface IMatrixPositionMatch {
    alignScore: PositionAlignmentScore;
    dimDists: DistanceFromClosestMatrixPosition[];
    dimShifts: NumberOfDimensionShifts;
    dist: DistanceFromClosestMatrixPosition;
    iShift: MatrixPositionShift;
    jShift: MatrixPositionShift;
    shiftScore: MatrixShiftScore;
    values: PositionValues;
}
export interface IVectorPosition {
    exactMatches: Map<string, IMatrixPosition>;
    endPoint: IMatrixPositionMatch;
}
export interface IEndPointPosition {
    match: IMatrixPositionMatch;
    neighborDists: INeighborDistance[][];
}
export declare type MatrixPositionShift = -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5;
export declare type MatrixShiftScore = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export declare type NumberOfDimensionShifts = 0 | 1 | 2;
export interface IFinalPositionFinder {
    findFinalPosition(closestMatrixPosition: IMatrixPosition): IFinalPosition;
}
export declare class FinalPositionFinder implements IFinalPositionFinder {
    viewport: IViewport;
    cubeUtils: ICubeUtils;
    cubeMoveMatrix: ICubeMoveMatrix;
    cubeMovement: ICubeMovement;
    findFinalPosition(closestMatrixPosition: IMatrixPosition): IFinalPosition;
    private getDirectionVals;
    private findVectorEndPoint;
    private matrixPositionsMatch;
    private findEndPointPosition;
    private positionIsABetterMatch;
    private getDimensionShift;
    private get2DOffsetFinalPosition;
    private getFinalPositionOfDimension;
    private get2DDegreeSeparations;
    private getDegreeShift;
    private getDirectionalDists;
    private getLargestDistAndIdx;
    private base72Pos;
    private getPositionDiffDirection;
}
//# sourceMappingURL=FinalPositionFinder.d.ts.map