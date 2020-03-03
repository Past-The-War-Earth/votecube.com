import { ICubeEventListener } from '@votecube/cube-logic';
import { Factor_Axis, IPollFactorPositionDefault, Position_Dir } from '@votecube/model';
export interface ICubePosition {
    axis: Factor_Axis;
    dir: Position_Dir;
}
export interface ICubeLogic {
    getDefaultCubePositions(): ICubePosition[];
    getPollFactorPositionDefault(): IPollFactorPositionDefault;
    shutDownCubeListener(cubeEventListener: ICubeEventListener): void;
    setCubeAdjustment(cubeEventListener: ICubeEventListener, enableCubeAdjustment: boolean): void;
}
export declare class CubeLogic implements ICubeLogic {
    getDefaultCubePositions(): ICubePosition[];
    getPollFactorPositionDefault(): IPollFactorPositionDefault;
    shutDownCubeListener(cubeEventListener: ICubeEventListener): void;
    setCubeAdjustment(cubeEventListener: ICubeEventListener, enableCubeAdjustment: boolean): void;
    private setCubeViewPort;
    private getFactorPositionDefault;
}
