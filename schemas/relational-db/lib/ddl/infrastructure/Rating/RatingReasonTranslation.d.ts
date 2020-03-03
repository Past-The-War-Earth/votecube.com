import { RatingReasonTranslation_Description, RatingReasonTranslation_Id, RatingReasonTranslation_Name } from '../../../types/infrastructure/rating/RatingReasonTranslation';
import { Language } from '../Language';
import { SystemGeneratedRow } from '../row/SystemGeneratedRow';
import { RatingReason } from './RatingReason';
export declare class RatingReasonTranslation extends SystemGeneratedRow {
    id: RatingReasonTranslation_Id;
    reason: RatingReason;
    language: Language;
    name: RatingReasonTranslation_Name;
    description: RatingReasonTranslation_Description;
}
