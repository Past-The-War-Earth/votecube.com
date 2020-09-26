import { State_Id, State_Name } from '../../types/location/State';
import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
import { Country } from './Country';
import { StateTown } from './StateTown';
export declare class State extends SystemGeneratedRow {
    id: State_Id;
    country: Country;
    name: State_Name;
    stateTowns: StateTown;
}
//# sourceMappingURL=State.d.ts.map