import { Poll_Id } from '@votecube/ecclesia';
import { IPollContinent } from '../location/PollContinent';
import { IPollCountry } from '../location/PollCountry';
import { IPollCounty } from '../location/PollCounty';
import { IPollState } from '../location/PollState';
import { IPollTown } from '../location/PollTown';
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
    pollsStates: IPollState[];
    pollsTowns: IPollTown[];
    startDate: Date;
    theme: any;
}
//# sourceMappingURL=PreparedPoll.d.ts.map