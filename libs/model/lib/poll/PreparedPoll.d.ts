import { IPollContinent } from '../location/PollContinent';
import { IPollCountry } from '../location/PollCountry';
import { IPollCounty } from '../location/PollCounty';
import { IPollState } from '../location/PollState';
import { IPollTown } from '../location/PollTown';
import { Id } from '../old/model';
import { IPollLabel } from './PollLabel';
export declare type Poll_Id = Id;
export declare const POLLS = "POLLS";
export declare const POLL_COLS: (string | number)[][];
export interface IPreparedPoll {
    endDate: Date;
    id: Poll_Id;
    name: string;
    pollsContinents: IPollContinent[];
    pollsCounties: IPollCounty[];
    pollsCountries: IPollCountry[];
    pollsFactorPositions: any[];
    pollsLabels: IPollLabel[];
    pollsStates: IPollState[];
    pollsTowns: IPollTown[];
    startDate: Date;
    theme: any;
}
