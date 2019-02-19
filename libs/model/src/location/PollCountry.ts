import {IPoll}    from '../poll/Poll'
import {ICountry} from './Country'

export type PollCountryId = number

export interface IPollCountry {

	country: ICountry
	id: PollCountryId
	poll: IPoll

}
