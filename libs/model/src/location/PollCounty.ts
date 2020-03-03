import {PollRunCounty_Id} from '@votecube/relational-db'
import {IPreparedPoll}    from '../poll/PreparedPoll'
import {ICounty}          from './County'

export const POLL_COUNTIES = 'POLL_COUNTIES'

export interface IPollCounty {

	county: ICounty
	id: PollRunCounty_Id
	poll: IPreparedPoll

}
