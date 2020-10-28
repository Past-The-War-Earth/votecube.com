import { PollRunContinent_Id } from '@votecube/ecclesia';
import { IPreparedPoll } from '../poll/PreparedPoll';
import { IContinent } from './Continent';
export declare const POLL_CONTINENTS = "POLL_CONTINENTS";
export interface IPollContinent {
    continent: IContinent;
    id: PollRunContinent_Id;
    poll: IPreparedPoll;
}
//# sourceMappingURL=PollContinent.d.ts.map