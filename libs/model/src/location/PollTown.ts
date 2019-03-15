import {Id}    from '../core/Model'
import {IPoll} from '../poll/Poll'
import {ITown} from './Town'

export type PollTownId = Id

export const POLL_TOWNS = 'POLL_TOWNS'

export interface IPollTown {

	id: PollTownId
	poll: IPoll
	town: ITown

}
