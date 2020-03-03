import {PollRunState_Id} from '@votecube/relational-db'
import {IPreparedPoll}   from '../poll/PreparedPoll'
import {IState}          from './State'

export const POLL_STATES = 'POLL_STATES'

export interface IPollState {

	id: PollRunState_Id
	poll: IPreparedPoll
	state: IState

}
