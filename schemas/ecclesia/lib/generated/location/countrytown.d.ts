import { ISystemGeneratedRow } from '../infrastructure/row/systemgeneratedrow';
import { ICountry } from './country';
import { ITown } from './town';
export interface ICountryTown extends ISystemGeneratedRow {
    country: ICountry;
    town: ITown;
}
//# sourceMappingURL=countrytown.d.ts.map