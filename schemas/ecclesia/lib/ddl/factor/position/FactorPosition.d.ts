import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
import { Factor } from '../Factor';
import { Position } from './Position';
/**
 * Which positions belong to which factors.
 */
export declare type FactorPosition_Id = number;
export declare class FactorPosition extends ImmutableActorRow {
    id: FactorPosition_Id;
    factor: Factor;
    position: Position;
}
//# sourceMappingURL=FactorPosition.d.ts.map