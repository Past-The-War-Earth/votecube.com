import { ICubeMoveMatrix, MoveIncrement, ZoomIndex } from './CubeMoveMatrix';
import { Bool, Direction, ICubeAgreement, ICubeMovement, IValuesThruCallback, Move } from './CubeMovement';
export interface IViewport {
    cb: IValuesThruCallback;
    cr: ICubeRotation;
    el: {
        [elementId: string]: Element;
    };
    increment: MoveIncrement;
    pd: ICubeAgreement;
    rmd: Dimension[];
    x: number;
    y: number;
    vd: IVisibleDirection;
    move(moveX: Bool, xBy: Move, moveY?: Bool, yBy?: Move): void;
    moveToDegree(): void;
    changeZoom(zoomIndex: ZoomIndex): void;
    reset(): void;
}
export interface ICubeRotation {
    x: number;
    y: number;
}
export interface IVisibleDirection {
    x: Direction;
    y: Direction;
    z: Direction;
}
export declare type Dimension = 'x' | 'y' | 'z';
export declare class Viewport implements IViewport {
    cubeMoveMatrix: ICubeMoveMatrix;
    cubeMovement: ICubeMovement;
    cb: any;
    cr: {
        x: number;
        y: number;
    };
    el: {};
    increment: MoveIncrement;
    pd: any;
    rmd: any[];
    vd: {
        x: Direction;
        y: Direction;
        z: Direction;
    };
    x: number;
    y: number;
    changeZoom(zoomIndex: ZoomIndex): void;
    move(moveX: Bool, xBy: Move, moveY: Bool, yBy: Move): void;
    /**
     * Need to be able to move to a particular angle
     */
    moveToDegree(): void;
    reset(): void;
}
//# sourceMappingURL=Viewport.d.ts.map