import { FactorOpinionRating_Id, FactorOpinionRating_IsCurrent } from '../../../types/opinion/user/FactorOpinionVersionRating';
import { Rating } from '../../infrastructure/rating/Rating';
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
import { FactorOpinionVersion } from '../FactorOpinionVersion';
/**
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
export declare class FactorOpinionVersionRating extends ImmutableActorRow {
    id: FactorOpinionRating_Id;
    isCurrent: FactorOpinionRating_IsCurrent;
    factorOpinionVersion: FactorOpinionVersion;
    rating: Rating;
    parent: FactorOpinionVersionRating;
    child: FactorOpinionVersionRating[];
}
