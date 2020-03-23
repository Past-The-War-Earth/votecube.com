import { Factor_Number } from '@votecube/model';
import { Outcome_Ordinal } from '@votecube/relational-db';
import { PositionPercent } from '../CubeMovement';
import { PercentChange } from './types';
export interface IMutationApi {
    move(factorNumber: Factor_Number, outcome: Outcome_Ordinal, percentChange: PercentChange): void;
    moveToValue(factorNumber: Factor_Number, value: PositionPercent): Promise<void>;
    recompute(): Promise<void>;
    toggleSurface(factorNumber: Factor_Number): void;
}
export declare class MutationApi implements IMutationApi {
    move(factorNumber: Factor_Number, outcome: Outcome_Ordinal, percentChange: PercentChange): void;
    moveToValue(factorNumber: Factor_Number, value: PositionPercent): Promise<void>;
    toggleSurface(factorNumber: Factor_Number): Promise<void>;
    recompute(): Promise<void>;
    private moveToPercent;
}
