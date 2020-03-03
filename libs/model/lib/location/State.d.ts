import { State_Id } from '@votecube/relational-db';
import { ICountry } from './Country';
export declare const STATES = "STATES";
export interface IState {
    country: ICountry;
    id: State_Id;
    name: string;
}
