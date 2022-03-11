import { IUiAgreement, IUiAgreementFactor, AgreementFactor_Value } from '@votecube/model';
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
export declare type Direction = -1 | 0 | 1;
export declare type PositionPercent = AgreementFactor_Value;
export interface IPosition {
    x: number;
    y: number;
}
export interface IMousePosition {
    last?: IPosition;
    start: IPosition;
}
export interface ICubeAgreement {
    factorToAxisMapping: IFactorToAxisMapping;
    agreement: IUiAgreement;
    x: ICubeAgreementDimension;
    y: ICubeAgreementDimension;
    z: ICubeAgreementDimension;
}
export declare type Factor_Axis = 'x' | 'y' | 'z';
export interface IFactorToAxisMapping {
    1: Factor_Axis;
    2: Factor_Axis;
    3: Factor_Axis;
}
export interface ICubeAgreementDimension extends IUiAgreementFactor {
    valid: boolean;
}
export declare type IValuesOutCallback = (agreement: IUiAgreement) => void;
export declare type IValuesThruCallback = (agreement: ICubeAgreement) => void;
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