import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
} from '@airport/air-control'
import {ChildRepoRow} from '@airport/holding-pattern'
import {Poll}         from '../poll/Poll'
import {State}        from './State'

export type PollState_Id = number

@Entity()
@Table({name: 'POLL_STATES'})
export class PollState
	extends ChildRepoRow {

	@GeneratedValue()
	@Column({name: 'POLL_STATE_ID'})
	id: PollState_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'STATE_ID', nullable: false})
	state: State

}
