import { Town_Id } from '@votecube/relational-db';
import { ICounty } from './County';
export declare const TOWNS = "TOWNS";
export interface ITown {
    county: ICounty;
    id: Town_Id;
    name: string;
}
