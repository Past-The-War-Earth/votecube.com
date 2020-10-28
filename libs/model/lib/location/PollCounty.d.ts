import { PollRunCounty_Id } from '@votecube/ecclesia';
import { IPreparedPoll } from '../poll/PreparedPoll';
import { ICounty } from './County';
export declare const POLL_COUNTIES = "POLL_COUNTIES";
export interface IPollCounty {
    county: ICounty;
    id: PollRunCounty_Id;
    poll: IPreparedPoll;
}
//# sourceMappingURL=PollCounty.d.ts.map