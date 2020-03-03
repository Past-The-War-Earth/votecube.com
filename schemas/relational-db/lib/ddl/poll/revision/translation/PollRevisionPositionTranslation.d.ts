import { PositionTranslation } from '../../../factor/position/PositionTranslation';
import { PollRevisionTranslation } from './PollRevisionTranslation';
/**
 * Needed because Position Translations can be shared across polls and
 * poll revisions.
 */
export declare class PollRevisionPositionTranslation {
    pollRevisionTranslation: PollRevisionTranslation;
    positionTranslation: PositionTranslation;
}
