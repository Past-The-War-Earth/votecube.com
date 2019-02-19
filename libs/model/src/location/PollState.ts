import {IPoll}  from '../poll/Poll'
import {IState} from './State'

export type PollStateId = number

export interface IPollState {

	id: PollStateId
	poll: IPoll
	state: IState

}
