import {Id}            from '../old/model'
import {IPreparedPoll} from '../poll/PreparedPoll'
import {IState}        from './State'

export type PollStateId = Id

export const POLL_STATES = 'POLL_STATES'

export interface IPollState {

	id: PollStateId
	poll: IPreparedPoll
	state: IState

}
