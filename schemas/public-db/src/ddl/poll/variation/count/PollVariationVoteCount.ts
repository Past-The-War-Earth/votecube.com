import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {SystemGeneratedRow} from '../../../infrastructure/SystemGeneratedRow'
import {PollVariation}      from '../PollVariation'

export type PollVariationVoteCount_Id = number
export type PollVariationVoteCount_Count = number

/**
 * Count of all vote.
 */
@Entity()
@Table({name: 'POLL_VARIATION_VOTE_COUNTS'})
export class PollVariationVoteCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_VARIATION_VOTE_COUNT_ID'})
	id: PollVariationVoteCount_Id

	@Column({name: 'COUNT'})
	count: PollVariationVoteCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pollVariation: PollVariation

}
