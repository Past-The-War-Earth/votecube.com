import {Id}            from '../old/model'
import {IPreparedPoll} from '../poll/PreparedPoll'
import {IState}        from './State'

export type PollState_Id = Id

export const POLL_STATES = 'POLL_STATES'

export interface IPollState {

	id: PollState_Id
	poll: IPreparedPoll
	state: IState

}
