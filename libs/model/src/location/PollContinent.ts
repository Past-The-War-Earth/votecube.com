import {Id}            from '../old/model'
import {IPreparedPoll} from '../poll/PreparedPoll'
import {IContinent}    from './Continent'

export type PollContinentId = Id

export const POLL_CONTINENTS = 'POLL_CONTINENTS'

export interface IPollContinent {

	continent: IContinent
	id: PollContinentId
	poll: IPreparedPoll

}
