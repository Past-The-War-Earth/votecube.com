import { UserPoll_Id, UserPoll_PinnedExplicitly } from '../../../types/poll/user/UserPoll';
import { MutableActorRow } from '../../infrastructure/row/MutableActorRow';
import { Poll } from '../Poll';
import { PollRevision } from '../revision/PollRevision';
import { UserPollRating } from './UserPollRating';
import { UserPollRevision } from './UserPollRevision';
/**
 * This is a mutable record - its OK because it pertains only to a given user,
 * hence it will be retrieved (publically) only by that user.  Immutablity
 * does not help much here.
 */
export declare class UserPoll extends MutableActorRow {
    id: UserPoll_Id;
    pinnedExplicitly: UserPoll_PinnedExplicitly;
    poll: Poll;
    pinnedRevision: PollRevision;
    userPollRevisions: UserPollRevision[];
    ratings: UserPollRating[];
}
