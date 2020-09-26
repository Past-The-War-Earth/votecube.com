import { County_Id, County_Name } from '../../types/location/County';
import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
import { CountyTown } from './CountyTown';
import { State } from './State';
export declare class County extends SystemGeneratedRow {
    id: County_Id;
    state: State;
    name: County_Name;
    countyTowns: CountyTown;
}
//# sourceMappingURL=County.d.ts.map