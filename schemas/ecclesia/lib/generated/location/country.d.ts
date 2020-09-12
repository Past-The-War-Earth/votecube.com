import { ISystemGeneratedRow } from '../infrastructure/row/systemgeneratedrow';
import { IContinent } from './continent';
import { IState } from './state';
import { ICountryTown } from './countrytown';
export interface ICountry extends ISystemGeneratedRow {
    id: number;
    name?: string;
    continent?: IContinent;
    states?: IState[];
    countryTowns?: ICountryTown;
}
