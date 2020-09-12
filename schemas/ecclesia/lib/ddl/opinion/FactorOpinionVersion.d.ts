import { FactorOpinionVersion_Id } from '../../types/opinion/FactorOpinionVersion';
import { Factor } from '../factor/Factor';
import { PollRevisionOpinion } from './PollRevisionOpinion';
import { FactorOpinionVersionTranslation } from './translation/FactorOpinionVersionTranslation';
/**
 * Belongs to PollOpinionVersion - does not need user or creation tracking.
 */
export declare class FactorOpinionVersion {
    id: FactorOpinionVersion_Id;
    pollRevisionOpinion: PollRevisionOpinion;
    factor: Factor;
    parent: FactorOpinionVersion;
    children: FactorOpinionVersion[];
    translations: FactorOpinionVersionTranslation[];
}
