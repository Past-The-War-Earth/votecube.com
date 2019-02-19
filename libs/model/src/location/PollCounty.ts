import {IPoll}   from '../poll/Poll'
import {ICounty} from './County'

export type PollCountyId = number

export interface IPollCounty {

	county: ICounty
	id: PollCountyId
	poll: IPoll

}
