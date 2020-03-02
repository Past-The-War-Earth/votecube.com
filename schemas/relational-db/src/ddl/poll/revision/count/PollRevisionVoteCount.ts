import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {
	PollRevisionVoteCount_Count,
	PollRevisionVoteCount_Id
}                           from '../../../../types/poll/revision/count/PollRevisionVoteCount'
import {SystemGeneratedRow} from '../../../infrastructure/row/SystemGeneratedRow'
import {PollRevision}       from '../PollRevision'

/**
 * Count of all vote.
 */
@Entity()
@Table({name: 'POLL_REVISION_VOTE_COUNTS'})
export class PollRevisionVoteCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_REVISION_VOTE_COUNT_ID'})
	id: PollRevisionVoteCount_Id

	@Column({name: 'COUNT'})
	count: PollRevisionVoteCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_ID'})
	pollRevision: PollRevision

}
