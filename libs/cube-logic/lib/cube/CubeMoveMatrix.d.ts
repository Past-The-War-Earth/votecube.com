import { PositionPercent } from './CubeMovement';
export declare enum MoveIncrement {
    FORTY_FIVE = 45,
    FIFTEEN = 15,
    FIVE = 5
}
export declare type NumDivisions = 72;
export declare type ZoomIndex = 0 | 1 | 2;
export declare type PositionValues = [
    PositionPercent,
    PositionPercent,
    PositionPercent,
    PositionPercent,
    PositionPercent,
    PositionPercent
];
export declare type MatrixIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71;
export declare type ValueArrayPosition = 0 | 1 | 2 | 3 | 4 | 5;
export declare type PositionValueTemplate = [
    PositionPercent,
    PositionPercent,
    PositionPercent
];
export interface ICubeMoveMatrix {
    MOVE_INCREMENTS: MoveIncrement[];
    MV_INC_IDX: {
        [key: string]: ZoomIndex;
    };
    NUM_DIVISIONS: NumDivisions;
    NUM_VALS: number;
    STEP_DEGS: number;
    VALUE_MATRIX: PositionValues[][];
}
export declare class CubeMoveMatrix implements ICubeMoveMatrix {
    MOVE_INCREMENTS: MoveIncrement[];
    MV_INC_IDX: {
        [key: string]: ZoomIndex;
    };
    NUM_DIVISIONS: NumDivisions;
    NUM_VALS: number;
    STEP_DEGS: number;
    VALUE_MATRIX: PositionValues[][];
    private fiveDegreeValueTemplate;
    private matrixMoveXY;
    private matrixTemplateDirectedPositions;
    private tempMatrixMoveXY;
    constructor();
    private populateValueMatrix;
}
//# sourceMappingURL=CubeMoveMatrix.d.ts.map