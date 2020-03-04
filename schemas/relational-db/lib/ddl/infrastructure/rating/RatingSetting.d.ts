import { RatingSetting_Id, RatingSetting_Key, RatingSetting_Value } from '../../../types/infrastructure/rating/RatingSetting';
import { Country } from '../../location/Country';
import { SystemGeneratedRow } from '../row/SystemGeneratedRow';
import { Rating } from './Rating';
/**
 * Different countries might have different age brackets for common
 * suitability ratings - record that here.
 */
export declare class RatingSetting extends SystemGeneratedRow {
    id: RatingSetting_Id;
    country: Country;
    rating: Rating;
    key: RatingSetting_Key;
    value: RatingSetting_Value;
}
