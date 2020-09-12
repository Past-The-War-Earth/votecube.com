import { ICountry } from '../../../location/country';
import { IPollRun } from '../pollrun';
export interface IPollRunCountry {
    id: number;
    country?: ICountry;
    run?: IPollRun;
}
