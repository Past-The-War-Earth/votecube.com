import {IPoll} from '../poll/Poll'
import {ITown} from './Town'

export type PollTownId = number

export interface IPollTown {

	id: PollTownId
	poll: IPoll
	town: ITown

}
