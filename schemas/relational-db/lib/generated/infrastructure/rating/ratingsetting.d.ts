import { ISystemGeneratedRow } from '../row/systemgeneratedrow';
import { ICountry } from '../../location/country';
import { IRating } from './rating';
export interface IRatingSetting extends ISystemGeneratedRow {
    id: number;
    key?: string;
    value?: string;
    country?: ICountry;
    rating?: IRating;
}
