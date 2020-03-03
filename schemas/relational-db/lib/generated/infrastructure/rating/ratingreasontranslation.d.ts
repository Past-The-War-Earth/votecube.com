import { ISystemGeneratedRow } from '../row/systemgeneratedrow';
import { IRatingReason } from './ratingreason';
import { ILanguage } from '../language';
export interface IRatingReasonTranslation extends ISystemGeneratedRow {
    id: number;
    name?: string;
    description?: string;
    reason?: IRatingReason;
    language?: ILanguage;
}
