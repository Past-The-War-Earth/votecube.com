import { ICubeEventListener } from '@votecube/cube-logic';
import { ICubePosition, ICubeSituationFactorPositionDefault } from '@votecube/model';
export interface ICubeLogic {
    getDefaultCubePositions(): ICubePosition[];
    getPollFactorPositionDefault(): ICubeSituationFactorPositionDefault;
    shutDownCubeListener(cubeEventListener: ICubeEventListener): void;
    setCubeAdjustment(cubeEventListener: ICubeEventListener, enableCubeAdjustment: boolean): void;
}
export declare class CubeLogic implements ICubeLogic {
    getDefaultCubePositions(): ICubePosition[];
    getPollFactorPositionDefault(): ICubeSituationFactorPositionDefault;
    shutDownCubeListener(cubeEventListener: ICubeEventListener): void;
    setCubeAdjustment(cubeEventListener: ICubeEventListener, enableCubeAdjustment: boolean): void;
    private setCubeViewPort;
    private getFactorPositionDefault;
}
//# sourceMappingURL=CubeLogic.d.ts.map