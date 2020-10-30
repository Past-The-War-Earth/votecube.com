import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
import { PollRevisionRating_Id, PollRevisionRating_Value } from '../../../types/poll/rating/PollRevisionRating';
import { Rating } from '../../infrastructure/Rating/Rating';
import { PollRevision } from '../revision/PollRevision';
/**
 * User ratings for a particular Poll Revision (likely computed from
 * PollRevisionTranslationRating).
 *
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
export declare class PollRevisionRating extends ImmutableActorRow {
    id: PollRevisionRating_Id;
    value: PollRevisionRating_Value;
    pollRevision: PollRevision;
    rating: Rating;
}
//# sourceMappingURL=PollRevisionRating.d.ts.map