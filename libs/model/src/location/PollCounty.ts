import {Id}            from '../old/model'
import {IPreparedPoll} from '../poll/PreparedPoll'
import {ICounty}       from './County'

export type PollCounty_Id = Id

export const POLL_COUNTIES = 'POLL_COUNTIES'

export interface IPollCounty {

	county: ICounty
	id: PollCounty_Id
	poll: IPreparedPoll

}
