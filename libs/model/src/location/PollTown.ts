import {Id}            from '../old/model'
import {IPreparedPoll} from '../poll/PreparedPoll'
import {ITown}         from './Town'

export type PollTown_Id = Id

export const POLL_TOWNS = 'POLL_TOWNS'

export interface IPollTown {

	id: PollTown_Id
	poll: IPreparedPoll
	town: ITown

}
