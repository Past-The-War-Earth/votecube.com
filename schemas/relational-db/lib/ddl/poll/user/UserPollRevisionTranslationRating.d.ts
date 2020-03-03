import { UserPollRevisionTranslationRating_Id, UserPollRevisionTranslationRating_IsCurrent } from '../../../types/poll/user/UserPollRevisionTranslationRating';
import { Rating } from '../../infrastructure/Rating/Rating';
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
import { PollRun } from '../run/PollRun';
import { PollRevisionTranslation } from '../revision/translation/PollRevisionTranslation';
import { UserPollRevisionTranslation } from './UserPollRevisionTranslation';
/**
 * User ratings for a particular Poll Revision Translation.
 *
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
export declare class UserPollRevisionTranslationRating extends ImmutableActorRow {
    id: UserPollRevisionTranslationRating_Id;
    isCurrent: UserPollRevisionTranslationRating_IsCurrent;
    userPollRevisionTranslation: UserPollRevisionTranslation;
    pollRevisionTranslation: PollRevisionTranslation;
    run: PollRun;
    rating: Rating;
    parent: UserPollRevisionTranslationRating;
    child: UserPollRevisionTranslationRating[];
}
