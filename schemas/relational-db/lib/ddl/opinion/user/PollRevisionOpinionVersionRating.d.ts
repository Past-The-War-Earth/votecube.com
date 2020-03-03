import { PollRevisionOpinionRating_Id, PollRevisionOpinionRating_IsCurrent } from '../../../types/opinion/user/PollRevisionOpinionVersionRating';
import { Rating } from '../../infrastructure/rating/Rating';
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
import { PollRevisionOpinionVersion } from '../PollRevisionOpinionVersion';
/**
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
export declare class PollRevisionOpinionVersionRating extends ImmutableActorRow {
    id: PollRevisionOpinionRating_Id;
    isCurrent: PollRevisionOpinionRating_IsCurrent;
    pollRevisionOpinionVersion: PollRevisionOpinionVersion;
    rating: Rating;
    parent: PollRevisionOpinionVersionRating;
    child: PollRevisionOpinionVersionRating[];
}
