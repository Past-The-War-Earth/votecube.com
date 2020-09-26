import { ISystemGeneratedRow } from '../infrastructure/row/systemgeneratedrow';
import { IState } from './state';
import { ITown } from './town';
export interface IStateTown extends ISystemGeneratedRow {
    state: IState;
    town: ITown;
}
//# sourceMappingURL=statetown.d.ts.map