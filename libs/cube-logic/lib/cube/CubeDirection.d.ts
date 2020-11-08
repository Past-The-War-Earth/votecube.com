import { IPosition } from './CubeMovement';
export interface IMoveCoords {
    moveX: 0 | 1;
    moveY: 0 | 1;
    xBy: number;
    yBy: number;
}
export interface ICubeDirection {
    getMove(startCoords: IPosition, endCoords: IPosition): IMoveCoords;
}
export declare class CubeDirection implements ICubeDirection {
    getMove(startCoords: IPosition, endCoords: IPosition): IMoveCoords;
    private directionVector;
}
//# sourceMappingURL=CubeDirection.d.ts.map