import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-control'
import {
	PollRunVoteCount_Count,
	PollRunVoteCount_Id
}                              from '../../../../types/poll/run/count/PollRunVoteCount'
import {SystemGeneratedRow} from '../../../infrastructure/row/SystemGeneratedRow'
import {PollRun}            from '../PollRun'

/**
 * Count of all votes.
 */
@Entity()
@Table({name: 'POLL_RUN_VOTE_COUNTS'})
export class PollRunVoteCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_RUN_VOTE_COUNT_ID'})
	id: PollRunVoteCount_Id

	@Column({name: 'COUNT'})
	count: PollRunVoteCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_RUN_ID'})
	run: PollRun

}
