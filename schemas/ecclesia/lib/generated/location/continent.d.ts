import { ISystemGeneratedRow } from '../infrastructure/row/systemgeneratedrow';
import { ICountry } from './country';
export interface IContinent extends ISystemGeneratedRow {
    id: number;
    name?: string;
    countries?: ICountry[];
}
//# sourceMappingURL=continent.d.ts.map