import { Country_Id } from '@votecube/relational-db';
import { IContinent } from './Continent';
export declare const COUNTRIES = "COUNTRIES";
export interface ICountry {
    continent: IContinent;
    id: Country_Id;
    name: string;
}
