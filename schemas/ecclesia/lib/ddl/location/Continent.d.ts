import { Continent_Id, Continent_Name } from '../../types/location/Continent';
import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
import { Country } from './Country';
export declare class Continent extends SystemGeneratedRow {
    id: Continent_Id;
    name: Continent_Name;
    countries: Country[];
}
//# sourceMappingURL=Continent.d.ts.map