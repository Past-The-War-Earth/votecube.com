import { PositionOpinionRating_Id, PositionOpinionRating_IsCurrent } from '../../../types/opinion/user/PositionOpinionVersionRating';
import { Rating } from '../../infrastructure/rating/Rating';
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
import { PositionOpinionVersion } from '../PositionOpinionVersion';
/**
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
export declare class PositionOpinionVersionRating extends ImmutableActorRow {
    id: PositionOpinionRating_Id;
    isCurrent: PositionOpinionRating_IsCurrent;
    positionOpinionVersion: PositionOpinionVersion;
    rating: Rating;
    parent: PositionOpinionVersionRating;
    child: PositionOpinionVersionRating[];
}
