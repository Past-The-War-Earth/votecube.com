import { RatingReason_Id } from '../../../types/infrastructure/rating/RatingReason';
import { SystemGeneratedRow } from '../row/SystemGeneratedRow';
import { RatingReasonTranslation } from './RatingReasonTranslation';
export declare class RatingReason extends SystemGeneratedRow {
    id: RatingReason_Id;
    translations: RatingReasonTranslation[];
}
