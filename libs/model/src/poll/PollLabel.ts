import {IUser}         from '../core/User'
import {Id}            from '../old/model'
import {ILabel}        from './Label'
import {IPreparedPoll} from './PreparedPoll'

export type PollLabelId = Id

export const POLL_LABELS = 'POLL_LABELS'

export interface IPollLabel {

	createdAt?: Date
	id: PollLabelId
	label: ILabel
	poll: IPreparedPoll
	user: IUser

}
