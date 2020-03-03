import { PositionOpinionVersion_Id } from '../../types/opinion/PositionOpinionVersion';
import { FactorOpinionVersion } from './FactorOpinionVersion';
import { PositionOpinionVersionTranslation } from './translation/PositionOpinionVersionTranslation';
import { PositionOpinionVersionRating } from './user/PositionOpinionVersionRating';
/**
 * Belongs to FactorOpinionVersion - does not need user or creation tracking.
 */
export declare class PositionOpinionVersion {
    id: PositionOpinionVersion_Id;
    factorOpinionVersion: FactorOpinionVersion;
    ratings: PositionOpinionVersionRating[];
    translations: PositionOpinionVersionTranslation[];
}
