import { PollRevisionOpinionVersion_Id } from '../../types/opinion/PollRevisionOpinionVersion';
import { Language } from '../infrastructure/Language';
import { ImmutableRow } from '../infrastructure/row/ImmutableRow';
import { VoteRevision } from '../vote/VoteRevision';
import { FactorOpinionVersion } from './FactorOpinionVersion';
import { PollRevisionOpinion } from './PollRevisionOpinion';
import { PollRevisionOpinionVersionTranslation } from './translation/PollRevisionOpinionVersionTranslation';
import { PollRevisionOpinionVersionRating } from './user/PollRevisionOpinionVersionRating';
/**
 * This the computed translation (based on most pinned factor revision).
 *
 * This record is mutable, it's only got IDs so that's OK.
 *
 * Belongs to PollRevisionOpinion - does not need user tracking
 */
export declare class PollRevisionOpinionVersion extends ImmutableRow {
    id: PollRevisionOpinionVersion_Id;
    pollRevisionOpinion: PollRevisionOpinion;
    voteRevision: VoteRevision;
    language: Language;
    parent: PollRevisionOpinionVersion;
    children: PollRevisionOpinionVersion[];
    ratings: PollRevisionOpinionVersionRating[];
    translations: PollRevisionOpinionVersionTranslation[];
    factors: FactorOpinionVersion[];
}
