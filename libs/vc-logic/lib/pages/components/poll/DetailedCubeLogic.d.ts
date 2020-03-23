import { IChildContainer } from '@airport/di';
import { IFactorData, IPositionData, IUiPollRevision } from '@votecube/model';
import { Outcome_Ordinal } from '@votecube/relational-db';
import { ICubePosition } from '../../../poll/CubeLogic';
export interface ICubeSide extends ICubePosition {
    colorRGB: string;
    factor: IFactorData;
    outcome: Outcome_Ordinal;
    position: IPositionData;
    textColorRGB: string;
}
export interface ICubeSideMap {
    x: {
        1?: ICubeSide;
        '-1'?: ICubeSide;
    };
    y: {
        1?: ICubeSide;
        '-1'?: ICubeSide;
    };
    z: {
        1?: ICubeSide;
        '-1'?: ICubeSide;
    };
}
export declare type SwitchToDefinition = ['x' | 'y' | 'z', -1 | 1];
export interface IDetailedCubeLogic {
    getCubeSides(uiPollRevision: IUiPollRevision, container: IChildContainer): Promise<{
        cubeSideMap: ICubeSideMap;
        cubeSides: ICubeSide[];
    }>;
    move(cubeSideMap: ICubeSideMap, cubeSide: ICubeSide, switchToDefinitions: any): void;
    switchPoles(cubeSideMap: ICubeSideMap, cubeSide: ICubeSide): void;
}
export declare class DetailedCubeLogic implements IDetailedCubeLogic {
    getCubeSides(uiPollRevision: IUiPollRevision, container: IChildContainer): Promise<{
        cubeSideMap: ICubeSideMap;
        cubeSides: ICubeSide[];
    }>;
    move(cubeSideMap: ICubeSideMap, cubeSide: ICubeSide, switchToDefinitions: SwitchToDefinition[]): void;
    switchPoles(cubeSideMap: ICubeSideMap, cubeSide: ICubeSide): void;
    private getSwitchArray;
    private moveFactorPair;
    private movePositionPair;
}
