import { ISystemGeneratedRow } from '../infrastructure/row/systemgeneratedrow';
import { ICounty } from './county';
export interface ITown extends ISystemGeneratedRow {
    id: number;
    name?: string;
    county?: ICounty;
}
