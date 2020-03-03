import { IContinent } from '../../../location/continent';
import { IPollRun } from '../pollrun';
export interface IPollRunContinent {
    id: number;
    continent?: IContinent;
    run?: IPollRun;
}
