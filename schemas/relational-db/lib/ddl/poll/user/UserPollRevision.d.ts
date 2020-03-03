import { UserPollRevision_Id } from '../../../types/poll/user/UserPollRevision';
import { MutableActorRow } from '../../infrastructure/row/MutableActorRow';
import { PollRevision } from '../revision/PollRevision';
import { UserPoll } from './UserPoll';
import { UserPollRevisionRating } from './UserPollRevisionRating';
import { UserPollRevisionTranslation } from './UserPollRevisionTranslation';
/**
 * User records for a particular revision
 */
export declare class UserPollRevision extends MutableActorRow {
    id: UserPollRevision_Id;
    userPoll: UserPoll;
    revision: PollRevision;
    translations: UserPollRevisionTranslation[];
    ratings: UserPollRevisionRating[];
}
