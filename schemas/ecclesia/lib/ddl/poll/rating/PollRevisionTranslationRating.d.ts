import { PollRevisionTranslationRating_Id, PollRevisionTranslationRating_Value } from '../../../types/poll/rating/PollRevisionTranslationRating';
import { Rating } from '../../infrastructure/Rating/Rating';
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
import { PollRun } from '../run/PollRun';
/**
 * User ratings for a particular Poll Revision Translation.
 *
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
export declare class PollRevisionTranslationRating extends ImmutableActorRow {
    id: PollRevisionTranslationRating_Id;
    value: PollRevisionTranslationRating_Value;
    run: PollRun;
    rating: Rating;
    parent: PollRevisionTranslationRating;
    child: PollRevisionTranslationRating[];
}
//# sourceMappingURL=PollRevisionTranslationRating.d.ts.map