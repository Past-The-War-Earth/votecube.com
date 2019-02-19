import {IPoll}      from '../poll/Poll'
import {IContinent} from './Continent'

export type PollContinentId = number

export interface IPollContinent {

	continent: IContinent
	id: PollContinentId
	poll: IPoll

}
