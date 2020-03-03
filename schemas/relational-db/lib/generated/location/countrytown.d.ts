import { ISystemGeneratedRow } from '../infrastructure/row/systemgeneratedrow';
import { ITown } from './town';
import { ICountry } from './country';
export interface ICountryTown extends ISystemGeneratedRow {
    town: ITown;
    country?: ICountry;
}
