import { ICubeEventListener, IMutationApi, IValuesOutCallback } from '@votecube/cube-logic';
import { ICubePosition, ICubeIdeaFactorPositionDefault } from '@votecube/model';
export interface ICubeLogic {
    getDefaultCubePositions(): ICubePosition[];
    getIdeaFactorPositionDefault(): ICubeIdeaFactorPositionDefault;
    shutDownCubeListener(cubeEventListener: ICubeEventListener): void;
    setCubeAdjustment(cubeEventListener: ICubeEventListener, enableCubeAdjustment: boolean): void;
    setCubeViewPort(cubeEventListener: ICubeEventListener, setMutationApi: (mutationApi: IMutationApi) => void, callback: IValuesOutCallback): void;
}
export declare class CubeLogic implements ICubeLogic {
    getDefaultCubePositions(): ICubePosition[];
    getIdeaFactorPositionDefault(): ICubeIdeaFactorPositionDefault;
    shutDownCubeListener(cubeEventListener: ICubeEventListener): void;
    setCubeAdjustment(cubeEventListener: ICubeEventListener, enableCubeAdjustment: boolean): void;
    setCubeViewPort(cubeEventListener: ICubeEventListener, setMutationApi: (mutationApi: IMutationApi) => void, callback: IValuesOutCallback): void;
    private getFactorPositionDefault;
}
//# sourceMappingURL=CubeLogic.d.ts.map