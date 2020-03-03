import { FactorOpinionVersion_Id } from '../../types/opinion/FactorOpinionVersion';
import { PollRevisionOpinionVersion } from './PollRevisionOpinionVersion';
import { PositionOpinionVersion } from './PositionOpinionVersion';
import { FactorOpinionVersionTranslation } from './translation/FactorOpinionVersionTranslation';
import { FactorOpinionVersionRating } from './user/FactorOpinionVersionRating';
/**
 * Belongs to PollOpinionVersion - does not need user or creation tracking.
 */
export declare class FactorOpinionVersion {
    id: FactorOpinionVersion_Id;
    pollRevisionOpinionVersion: PollRevisionOpinionVersion;
    ratings: FactorOpinionVersionRating[];
    translations: FactorOpinionVersionTranslation[];
    positionOpinionVersions: PositionOpinionVersion[];
}
