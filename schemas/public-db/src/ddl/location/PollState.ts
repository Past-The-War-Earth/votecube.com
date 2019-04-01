import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	Table,
	TraditionalServerSeq
}                     from '@airport/air-control'
import {ChildRepoRow} from '@airport/holding-pattern'
import {Poll}         from '../poll/Poll'
import {State}        from './State'

export type PollState_Id = number

@Entity()
@Table({name: 'POLL_STATES'})
export class PollState
	extends ChildRepoRow {

	// @GeneratedValue()
	@TraditionalServerSeq()
	@Column({name: 'POLL_STATE_ID'})
	id: PollState_Id

	@ManyToOne()
		// @JoinColumn({name: 'POLL_ID', nullable: false})
		poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'STATE_ID', nullable: false})
	state: State

}
