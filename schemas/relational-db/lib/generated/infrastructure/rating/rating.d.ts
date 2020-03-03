import { ISystemGeneratedRow } from '../row/systemgeneratedrow';
import { IRatingType } from './ratingtype';
import { IRatingSetting } from './ratingsetting';
import { IRatingTranslation } from './ratingtranslation';
export interface IRating extends ISystemGeneratedRow {
    id: number;
    cssClass?: string;
    type?: IRatingType;
    settings?: IRatingSetting[];
    translations?: IRatingTranslation[];
}
