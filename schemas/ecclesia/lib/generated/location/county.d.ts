import { ISystemGeneratedRow } from '../infrastructure/row/systemgeneratedrow';
import { IState } from './state';
import { ICountyTown } from './countytown';
export interface ICounty extends ISystemGeneratedRow {
    id: number;
    name?: string;
    state?: IState;
    countyTowns?: ICountyTown;
}
//# sourceMappingURL=county.d.ts.map