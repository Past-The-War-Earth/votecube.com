import { PollRevisionFactorPosition_Axis, PollRevisionFactorPosition_Color, PollRevisionFactorPosition_Dir, PollRevisionFactorPosition_FactorNumber, PollRevisionFactorPosition_Id, PollRevisionFactorPosition_OutcomeOrdinal } from '../../../types/poll/revision/PollRevisionFactorPosition';
import { FactorPosition } from '../../factor/position/FactorPosition';
import { Skin } from '../../factor/Skin';
import { ImmutableRow } from '../../infrastructure/row/ImmutableRow';
import { PollRevision } from './PollRevision';
export declare class PollRevisionFactorPosition extends ImmutableRow {
    id: PollRevisionFactorPosition_Id;
    axis: PollRevisionFactorPosition_Axis;
    dir: PollRevisionFactorPosition_Dir;
    factorNumber: PollRevisionFactorPosition_FactorNumber;
    blue: PollRevisionFactorPosition_Color;
    green: PollRevisionFactorPosition_Color;
    red: PollRevisionFactorPosition_Color;
    outcomeOrdinal: PollRevisionFactorPosition_OutcomeOrdinal;
    skin: Skin;
    pollRevision: PollRevision;
    /**
     * This is done at Factor + Position level (vs FactorRevision & PositionRevision)
     * because the underlying relationship between Factor and Position does not change
     * with revisions.
     *
     * Essentially this just says which positions belong to which factors.  Which
     * revisions is determined at PollRevision level (not PollFactorPositionRevision)
     */
    factorPosition: FactorPosition;
    parent: PollRevisionFactorPosition;
    children: PollRevisionFactorPosition[];
}
//# sourceMappingURL=PollRevisionFactorPosition.d.ts.map