import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	Table,
	TraditionalServerSeq
}                               from '@airport/air-control'
import {ChildRepoRow}           from '@airport/holding-pattern'
import {PollFactorPosition_Dir} from '../..'
import {
	Poll,
	Poll_Id
}                               from '../poll/Poll'
import {Town}                   from './Town'

export type PollTown_Id = number

@Entity()
@Table({name: 'POLL_TOWNS'})
export class PollTown
	extends ChildRepoRow {

	// @GeneratedValue()
	@TraditionalServerSeq()
	@Column({name: 'POLL_STATE_ID'})
	id: PollTown_Id

	@Column({name: 'POLL_ID'})
	pollId: Poll_Id

	@ManyToOne()
		// @JoinColumn({name: 'POLL_ID', nullable: false})
		poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'TOWN_ID', nullable: false})
	town: Town

}
