import { PollRunTown_Id } from '@votecube/ecclesia';
import { IPreparedPoll } from '../poll/PreparedPoll';
import { ITown } from './Town';
export declare const POLL_TOWNS = "POLL_TOWNS";
export interface IPollTown {
    id: PollRunTown_Id;
    poll: IPreparedPoll;
    town: ITown;
}
//# sourceMappingURL=PollTown.d.ts.map