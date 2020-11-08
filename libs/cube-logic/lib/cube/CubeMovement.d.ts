import { Factor_Axis, IVote, IVoteFactor, Position_Dir, VoteFactor_Value } from '@votecube/model';
import { ICubeMoveMatrix, MatrixIndex } from './CubeMoveMatrix';
export declare enum Bool {
    False = 0,
    True = 1
}
export declare enum Move {
    Down = -1,
    None = 0,
    Up = 1
}
export declare type Direction = Position_Dir | 0;
export declare type PositionPercent = VoteFactor_Value;
export interface IPosition {
    x: number;
    y: number;
}
export interface IMousePosition {
    last?: IPosition;
    start: IPosition;
}
export interface IUiVote {
    factorToAxisMapping: IFactorToAxisMapping;
    vote: IVote;
    x: IUiVoteDimension;
    y: IUiVoteDimension;
    z: IUiVoteDimension;
}
export interface IFactorToAxisMapping {
    1: Factor_Axis;
    2: Factor_Axis;
    3: Factor_Axis;
}
export interface IUiVoteDimension extends IVoteFactor {
    valid: boolean;
}
export declare type IValuesOutCallback = (vote: IVote) => void;
export declare type IValuesThruCallback = (vote: IUiVote) => void;
export interface ICubeMovement {
    mouse: IMousePosition;
    getMatrixIdxFromDeg(rotationDegrees: number, cubeMoveMatrix: ICubeMoveMatrix): MatrixIndex;
    moveCoordinates(currentDegree: number, move: Move, cubeMoveMatrix: ICubeMoveMatrix): [number, MatrixIndex];
    normMatrixIdx(signedMatrixIndex: number, cubeMoveMatrix: ICubeMoveMatrix): MatrixIndex;
}
export declare class CubeMovement implements ICubeMovement {
    mouse: IMousePosition;
    getMatrixIdxFromDeg(rotationDegrees: number, cubeMoveMatrix: ICubeMoveMatrix): MatrixIndex;
    moveCoordinates(currentDegree: number, move: Move, cubeMoveMatrix: ICubeMoveMatrix): [number, MatrixIndex];
    normMatrixIdx(signedMatrixIndex: number, cubeMoveMatrix: ICubeMoveMatrix): MatrixIndex;
}
//# sourceMappingURL=CubeMovement.d.ts.map