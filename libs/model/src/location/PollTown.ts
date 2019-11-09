import {Id}            from '../old/model'
import {IPreparedPoll} from '../poll/PreparedPoll'
import {ITown}         from './Town'

export type PollTownId = Id

export const POLL_TOWNS = 'POLL_TOWNS'

export interface IPollTown {

	id: PollTownId
	poll: IPreparedPoll
	town: ITown

}
