import { PollRunState_Id } from '@votecube/ecclesia';
import { IPreparedPoll } from '../poll/PreparedPoll';
import { IState } from './State';
export declare const POLL_STATES = "POLL_STATES";
export interface IPollState {
    id: PollRunState_Id;
    poll: IPreparedPoll;
    state: IState;
}
//# sourceMappingURL=PollState.d.ts.map