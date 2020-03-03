import { RatingTranslation_Description, RatingTranslation_Id, RatingTranslation_Name } from '../../../types/infrastructure/rating/RatingTranslation';
import { Language } from '../Language';
import { SystemGeneratedRow } from '../row/SystemGeneratedRow';
import { Rating } from './Rating';
export declare class RatingTranslation extends SystemGeneratedRow {
    id: RatingTranslation_Id;
    rating: Rating;
    language: Language;
    name: RatingTranslation_Name;
    description: RatingTranslation_Description;
}
