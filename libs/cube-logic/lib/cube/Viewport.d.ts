import { Factor_Axis } from '@votecube/model';
import { MoveIncrement, ZoomIndex } from './CubeMoveMatrix';
import { Bool, Direction, IUiVote, IValuesThruCallback, Move } from './CubeMovement';
export interface IViewport {
    cb: IValuesThruCallback;
    cr: ICubeRotation;
    el: {
        [elementId: string]: Element;
    };
    increment: MoveIncrement;
    pd: IUiVote;
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
export declare type Dimension = Factor_Axis;
export declare class Viewport implements IViewport {
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
        x: 0 | 1 | -1;
        y: 0 | 1 | -1;
        z: 0 | 1 | -1;
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