import { PollRunCountry_Id } from '@votecube/relational-db';
import { IPreparedPoll } from '../poll/PreparedPoll';
import { ICountry } from './Country';
export declare const POLL_COUNTRIES = "POLL_COUNTRIES";
export interface IPollCountry {
    country: ICountry;
    id: PollRunCountry_Id;
    poll: IPreparedPoll;
}
