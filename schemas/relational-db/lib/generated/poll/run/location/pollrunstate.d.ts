import { IState } from '../../../location/state';
import { IPollRun } from '../pollrun';
export interface IPollRunState {
    id: number;
    state?: IState;
    run?: IPollRun;
}
