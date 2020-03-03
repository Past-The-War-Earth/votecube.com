import { ISystemGeneratedRow } from '../row/systemgeneratedrow';
import { IRatingReasonTranslation } from './ratingreasontranslation';
export interface IRatingReason extends ISystemGeneratedRow {
    id: number;
    translations?: IRatingReasonTranslation[];
}
