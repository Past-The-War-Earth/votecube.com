import { FactorTranslation } from '../../../factor/FactorTranslation';
import { PollRevisionTranslation } from './PollRevisionTranslation';
/**
 * Needed because Factor Translations can be shared across polls and
 * poll revisions.
 */
export declare class PollRevisionFactorTranslation {
    pollRevisionTranslation: PollRevisionTranslation;
    factorTranslation: FactorTranslation;
}
