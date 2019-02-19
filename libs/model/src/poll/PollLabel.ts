import {ILabel} from './Label'
import {IPoll}  from './Poll'
import {IUser}  from '../User'

export type PollLabelId = number

export interface IPollLabel {

	createdAt?: Date
	id: PollLabelId
	label: ILabel
	poll: IPoll
	user: IUser

}
