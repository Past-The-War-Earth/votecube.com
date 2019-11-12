import {IUser}         from '../core/User'
import {Id}            from '../old/model'
import {ILabel}        from './Label'
import {IPreparedPoll} from './PreparedPoll'

export type PollLabel_Id = Id

export const POLL_LABELS = 'POLL_LABELS'

export interface IPollLabel {

	createdAt?: Date
	id: PollLabel_Id
	label: ILabel
	poll: IPreparedPoll
	user: IUser

}
