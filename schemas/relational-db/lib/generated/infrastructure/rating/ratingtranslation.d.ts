import { ISystemGeneratedRow } from '../row/systemgeneratedrow';
import { IRating } from './rating';
import { ILanguage } from '../language';
export interface IRatingTranslation extends ISystemGeneratedRow {
    id: number;
    name?: string;
    description?: string;
    rating?: IRating;
    language?: ILanguage;
}
