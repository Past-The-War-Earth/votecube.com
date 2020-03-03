import { UserPollRating_Id } from '../../../types/poll/user/UserPollRating';
import { Rating } from '../../infrastructure/Rating/Rating';
import { MutableActorRow } from '../../infrastructure/row/MutableActorRow';
import { Poll } from '../Poll';
import { UserPoll } from './UserPoll';
/**
 * User ratings for a particular Poll  (likely computed from
 * UserPollRevisionRating).
 *
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
export declare class UserPollRating extends MutableActorRow {
    id: UserPollRating_Id;
    userPoll: UserPoll;
    poll: Poll;
    rating: Rating;
}
