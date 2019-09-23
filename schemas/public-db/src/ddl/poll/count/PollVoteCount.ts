import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {SystemGeneratedRow} from '../../infrastructure/SystemGeneratedRow'
import {Poll}               from '../Poll'

export type PollVoteCount_Id = number
export type PollVoteCount_Count = number

/**
 * Count of all votes.
 */
@Entity()
@Table({name: 'POLL_VOTE_COUNTS'})
export class PollVoteCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_VOTE_COUNT_ID'})
	id: PollVoteCount_Id

	@Column({name: 'COUNT'})
	count: PollVoteCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID'})
	poll: Poll

}
