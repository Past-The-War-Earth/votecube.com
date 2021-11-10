import { ICubeEventListener, IMutationApi, IValuesOutCallback } from '@votecube/cube-logic';
import { ICubePosition, ICubeSituationFactorPositionDefault } from '@votecube/model';
export interface ICubeLogic {
    getDefaultCubePositions(): ICubePosition[];
    getSituationFactorPositionDefault(): ICubeSituationFactorPositionDefault;
    shutDownCubeListener(cubeEventListener: ICubeEventListener): void;
    setCubeAdjustment(cubeEventListener: ICubeEventListener, enableCubeAdjustment: boolean): void;
}
export declare class CubeLogic implements ICubeLogic {
    getDefaultCubePositions(): ICubePosition[];
    getSituationFactorPositionDefault(): ICubeSituationFactorPositionDefault;
    shutDownCubeListener(cubeEventListener: ICubeEventListener): void;
    setCubeAdjustment(cubeEventListener: ICubeEventListener, enableCubeAdjustment: boolean): void;
    setCubeViewPort(cubeEventListener: ICubeEventListener, setMutationApi: (mutationApi: IMutationApi) => void, callback: IValuesOutCallback): void;
    private getFactorPositionDefault;
}
//# sourceMappingURL=CubeLogic.d.ts.map