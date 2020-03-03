import { ISystemGeneratedRow } from '../infrastructure/row/systemgeneratedrow';
import { ICountry } from './country';
import { IStateTown } from './statetown';
export interface IState extends ISystemGeneratedRow {
    id: number;
    name?: string;
    country?: ICountry;
    stateTowns?: IStateTown;
}
