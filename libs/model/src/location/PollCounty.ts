import {Id}      from '../core/Model'
import {IPoll}   from '../poll/Poll'
import {ICounty} from './County'

export type PollCountyId = Id

export interface IPollCounty {

	county: ICounty
	id: PollCountyId
	poll: IPoll

}
