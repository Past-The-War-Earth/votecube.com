import { Country_Id, Country_Name } from '../../types/location/Country';
import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
import { Continent } from './Continent';
import { CountryTown } from './CountryTown';
import { State } from './State';
export declare class Country extends SystemGeneratedRow {
    id: Country_Id;
    continent: Continent;
    name: Country_Name;
    states: State[];
    countryTowns: CountryTown;
}
//# sourceMappingURL=Country.d.ts.map