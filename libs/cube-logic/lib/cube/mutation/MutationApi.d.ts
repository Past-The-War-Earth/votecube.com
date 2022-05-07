import { ICubeMoveMatrix, IDegreePositionChooser } from '../..';
import { ICubeUtils } from '../../utils/CubeUtils';
import { IEventListenerMap } from '../../utils/EventListenerMap';
import { ICubeMovement, PositionPercent } from '../CubeMovement';
import { IViewport } from '../Viewport';
import { IFinalPositionFinder } from './FinalPositionFinder';
import { IMatrixValueChooser } from './MatrixValueChooser';
import { IPercentagePositionChooser } from './PercentagePositionChooser';
import { Factor_Number, Outcome_Ordinal, PercentChange } from './types';
export interface IMutationApi {
    move(factorNumber: Factor_Number, outcome: Outcome_Ordinal, percentChange: PercentChange): void;
    moveToValue(factorNumber: Factor_Number, value: PositionPercent): Promise<void>;
    recompute(): Promise<void>;
    toggleSurface(factorNumber: Factor_Number): void;
}
export declare class MutationApi implements IMutationApi {
    cubeMoveMatrix: ICubeMoveMatrix;
    cubeMovement: ICubeMovement;
    cubeUtils: ICubeUtils;
    degreePositionChooser: IDegreePositionChooser;
    eventListenerMap: IEventListenerMap;
    finalPositionFinder: IFinalPositionFinder;
    matrixValueChooser: IMatrixValueChooser;
    mutationApi: IMutationApi;
    percentagePositionChooser: IPercentagePositionChooser;
    viewport: IViewport;
    move(factorNumber: Factor_Number, outcome: Outcome_Ordinal, percentChange: PercentChange): void;
    moveToValue(factorNumber: Factor_Number, value: PositionPercent): Promise<void>;
    toggleSurface(factorNumber: Factor_Number): Promise<void>;
    recompute(): Promise<void>;
    private moveToPercent;
}
//# sourceMappingURL=MutationApi.d.ts.map