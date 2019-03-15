import {Id}     from '../core/Model'
import {IUser}  from '../User'
import {ILabel} from './Label'
import {IPoll}  from './Poll'

export type PollLabelId = Id

export const POLL_LABELS = 'POLL_LABELS'

export interface IPollLabel {

	createdAt?: Date
	id: PollLabelId
	label: ILabel
	poll: IPoll
	user: IUser

}
