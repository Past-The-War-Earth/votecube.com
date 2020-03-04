import { UserPollRevisionRating_Id } from '../../../types/poll/user/UserPollRevisionRating';
import { Rating } from '../../infrastructure/Rating/Rating';
import { MutableActorRow } from '../../infrastructure/row/MutableActorRow';
import { PollRevision } from '../revision/PollRevision';
import { UserPollRevision } from './UserPollRevision';
/**
 * User ratings for a particular Poll Revision (likely computed from
 * PollRevisionTranslationRating).
 *
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
export declare class UserPollRevisionRating extends MutableActorRow {
    id: UserPollRevisionRating_Id;
    userPollRevision: UserPollRevision;
    pollRevision: PollRevision;
    rating: Rating;
}
