import {Id}            from '../old/model'
import {IPreparedPoll} from '../poll/PreparedPoll'
import {ICounty}       from './County'

export type PollCountyId = Id

export const POLL_COUNTIES = 'POLL_COUNTIES'

export interface IPollCounty {

	county: ICounty
	id: PollCountyId
	poll: IPreparedPoll

}
