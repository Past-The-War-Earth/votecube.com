import { PollRunTown_Id } from '@votecube/relational-db';
import { IPreparedPoll } from '../poll/PreparedPoll';
import { ITown } from './Town';
export declare const POLL_TOWNS = "POLL_TOWNS";
export interface IPollTown {
    id: PollRunTown_Id;
    poll: IPreparedPoll;
    town: ITown;
}
