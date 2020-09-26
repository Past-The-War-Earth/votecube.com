import { PositionOpinionVersion_Id } from '../../types/opinion/PositionOpinionVersion';
import { PollRevisionFactorPosition } from '../poll/revision/PollRevisionFactorPosition';
import { PollRevisionOpinion } from './PollRevisionOpinion';
import { PositionOpinionVersionTranslation } from './translation/PositionOpinionVersionTranslation';
/**
 * Belongs to FactorOpinionVersion - does not need user or creation tracking.
 */
export declare class PositionOpinionVersion {
    id: PositionOpinionVersion_Id;
    pollRevisionOpinion: PollRevisionOpinion;
    factorPosition: PollRevisionFactorPosition;
    parent: PositionOpinionVersion;
    children: PositionOpinionVersion[];
    translations: PositionOpinionVersionTranslation[];
}
//# sourceMappingURL=PositionOpinionVersion.d.ts.map