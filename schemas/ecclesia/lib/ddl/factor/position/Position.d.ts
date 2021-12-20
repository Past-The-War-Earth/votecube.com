import { Position_Id, Position_Name } from '../../../types/factor/position/Position';
import { AgeSuitableRow } from '../../infrastructure/row/AgeSuitableRow';
import { PollRevision } from '../../poll/revision/PollRevision';
import { FactorPosition } from './FactorPosition';
import { PositionTranslation } from './PositionTranslation';
/**
 * This is the generic position records (not related to any poll).
 */
export declare class Position extends AgeSuitableRow {
    id: Position_Id;
    createdAtPollRevision: PollRevision;
    name: Position_Name;
    parent: Position;
    children: Position[];
    factorPositions: FactorPosition[];
    translations: PositionTranslation[];
}
//# sourceMappingURL=Position.d.ts.map