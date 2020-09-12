import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
import { Factor } from '../Factor';
import { Position } from './Position';
/**
 * Which positions belong to which factors.
 */
export declare class FactorPosition extends ImmutableActorRow {
    factor: Factor;
    position: Position;
}
