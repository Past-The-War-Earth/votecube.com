import { PollRevisionOpinionRating_Id } from '../../../types/opinion/rating/PollRevisionOpinionRating';
import { Rating } from '../../infrastructure/rating/Rating';
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
import { PollRevisionOpinion } from '../PollRevisionOpinion';
/**
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
export declare class PollRevisionOpinionRating extends ImmutableActorRow {
    id: PollRevisionOpinionRating_Id;
    pollRevisionOpinion: PollRevisionOpinion;
    rating: Rating;
}
//# sourceMappingURL=PollRevisionOpinionRating.d.ts.map