import {Id}     from '../core/Model'
import {IPoll}  from '../poll/Poll'
import {IState} from './State'

export type PollStateId = Id

export interface IPollState {

	id: PollStateId
	poll: IPoll
	state: IState

}
