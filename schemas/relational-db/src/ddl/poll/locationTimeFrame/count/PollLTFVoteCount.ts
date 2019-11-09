import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-control'
import {
	PollLTFVoteCount_Count,
	PollLTFVoteCount_Id
}                              from '../../../../types/poll/locationTimeFrame/count/PollLTFVoteCount'
import {SystemGeneratedRow}    from '../../../infrastructure/row/SystemGeneratedRow'
import {PollLocationTimeFrame} from '../PollLocationTimeFrame'

/**
 * Count of all votes.
 */
@Entity()
@Table({name: 'POLL_LTF_VOTE_COUNTS'})
export class PollLTFVoteCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_LTF_VOTE_COUNT_ID'})
	id: PollLTFVoteCount_Id

	@Column({name: 'COUNT'})
	count: PollLTFVoteCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_LOCATION_TIME_FRAME_ID'})
	locationTimeFrame: PollLocationTimeFrame

}
