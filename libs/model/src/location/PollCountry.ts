import {Id}            from '../old/model'
import {IPreparedPoll} from '../poll/PreparedPoll'
import {ICountry}      from './Country'

export type PollCountryId = Id

export const POLL_COUNTRIES = 'POLL_COUNTRIES'

export interface IPollCountry {

	country: ICountry
	id: PollCountryId
	poll: IPreparedPoll

}
