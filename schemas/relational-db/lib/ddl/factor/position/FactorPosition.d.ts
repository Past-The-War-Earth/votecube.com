import { FactorPosition_Id } from '../../../types/factor/position/FactorPosition';
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
import { Factor } from '../Factor';
import { Position } from './Position';
/**
 * Which positions belong to which factors.
 */
export declare class FactorPosition extends ImmutableActorRow {
    id: FactorPosition_Id;
    factor: Factor;
    position: Position;
}
