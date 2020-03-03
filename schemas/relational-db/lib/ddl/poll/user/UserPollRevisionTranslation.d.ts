import { UserPollRevisionTranslation_Id } from '../../../types/poll/user/UserPollRevisionTranslation';
import { MutableActorRow } from '../../infrastructure/row/MutableActorRow';
import { PollRevisionTranslation } from '../revision/translation/PollRevisionTranslation';
import { UserPollRevision } from './UserPollRevision';
import { UserPollRevisionTranslationRating } from './UserPollRevisionTranslationRating';
/**
 * User records for a particular User Poll RevisionTranslation.
 */
export declare class UserPollRevisionTranslation extends MutableActorRow {
    id: UserPollRevisionTranslation_Id;
    userPollRevision: UserPollRevision;
    revisionTranslation: PollRevisionTranslation;
    ratings: UserPollRevisionTranslationRating[];
}
