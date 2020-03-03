import { Position_Id } from '../../../types/factor/position/Position';
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
import { PollRevision } from '../../poll/revision/PollRevision';
import { FactorPosition } from './FactorPosition';
import { PositionTranslation } from './PositionTranslation';
/**
 * This is the generic position records (not related to any poll).
 */
export declare class Position extends ImmutableActorRow {
    id: Position_Id;
    createdAtPollRevision: PollRevision;
    parentTranslation: PositionTranslation;
    parent: Position;
    children: Position[];
    factorPositions: FactorPosition[];
    translations: PositionTranslation[];
}
