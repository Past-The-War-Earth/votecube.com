import { IUiAgreement } from '@votecube/model';
import { Factor_Number } from './mutation/types';
import { IPerElementEventListenerMap } from '../utils/EventListenerMap';
import { IValuesOutCallback } from './CubeMovement';
import { IMutationApi } from './mutation/MutationApi';
export declare type MovementDirection = -1 | 0 | 1;
export declare type ChangeInPixels = number;
export declare type DirectionVector = [
    MovementDirection,
    ChangeInPixels
];
export interface ICubeEventListener {
    addCubeAdjustment(): void;
    clearCubeAdjustment(): void;
    clearView(elementId: string): void;
    resumeInteraction(): void;
    setPositionData(agreement: IUiAgreement, factorNumbers?: Factor_Number[]): boolean;
    setPositionDataAndMove(agreement: IUiAgreement): void;
    setView(elementId: string): void;
    setViewPort(forCube: boolean, cb?: IValuesOutCallback): IMutationApi;
    suspendInteraction(): void;
}
export declare const TOUCH: boolean;
export declare class CubeEventListener implements ICubeEventListener {
    private dLM;
    private lastMove;
    private suspended;
    addCubeAdjustment(): void;
    addCubeAdjustmentToELM(eventListenerMap: IPerElementEventListenerMap): void;
    clearCubeAdjustment(): void;
    clearView(elementId: string): void;
    resumeInteraction(): void;
    setPositionData(agreement: IUiAgreement, factorNumbers?: Factor_Number[]): boolean;
    setPositionDataAndMove(agreement: IUiAgreement): void;
    setView(elementId: string): void;
    setViewPort(forCube: boolean, cb?: IValuesOutCallback): IMutationApi;
    suspendInteraction(): void;
    private getUIUiAgreementDimension;
    private moveViewport;
    /**
     * On mousedown or touchstart
     */
    private oMdTs;
    /**
     * On mousemove or touchmove
     */
    private oMmTm;
    private populateCoords;
    private populateEndCoords;
    private populateStartCoords;
    /**
     * Remove mousemove or touchmove
     */
    private rmMmTm;
    private safeOMdTs;
    private safeRmMmTm;
}
//# sourceMappingURL=CubeEventListener.d.ts.map