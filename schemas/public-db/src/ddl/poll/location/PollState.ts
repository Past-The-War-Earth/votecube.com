import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}              from '@airport/air-control'
import {State} from '../../location/State'
import {Poll}  from '../Poll'

export type PollState_Id = number

@Entity()
@Table({name: 'POLL_STATES'})
export class PollState {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_STATE_ID'})
	id: PollState_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'STATE_ID', nullable: false})
	state: State

}
