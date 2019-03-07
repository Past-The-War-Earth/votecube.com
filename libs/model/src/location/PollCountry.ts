import {Id}       from '../core/Model'
import {IPoll}    from '../poll/Poll'
import {ICountry} from './Country'

export type PollCountryId = Id

export interface IPollCountry {

	country: ICountry
	id: PollCountryId
	poll: IPoll

}
