import { Rating_CssClass, Rating_Id } from '../../../types/infrastructure/rating/Rating';
import { SystemGeneratedRow } from '../row/SystemGeneratedRow';
import { RatingSetting } from './RatingSetting';
import { RatingType } from './RatingType';
/**
 * Note suitability settings will either have a dedicated UI (like in age suitability),
 * or will be transparent (like country suitability - China).  However they share the
 * same table as all the ratings (since schematically they are the same).  The idea
 * is - rate the poll.  If you think that the poll is good enough to vote or even be shown
 * then you submit a vote.  Rating is about polls.  Voting is about poll opinions.
 */
export declare class Rating extends SystemGeneratedRow {
    id: Rating_Id;
    cssClass: Rating_CssClass;
    type: RatingType;
    settings: RatingSetting[];
}
//# sourceMappingURL=Rating.d.ts.map