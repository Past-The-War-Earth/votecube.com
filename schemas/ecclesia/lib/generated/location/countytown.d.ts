import { ISystemGeneratedRow } from '../infrastructure/row/systemgeneratedrow';
import { ICounty } from './county';
import { ITown } from './town';
export interface ICountyTown extends ISystemGeneratedRow {
    county: ICounty;
    town: ITown;
}
//# sourceMappingURL=countytown.d.ts.map