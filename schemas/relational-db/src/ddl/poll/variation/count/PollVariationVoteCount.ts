import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {
	PollVariationVoteCount_Count,
	PollVariationVoteCount_Id
}                           from '../../../../types/poll/variation/count/PollVariationVoteCount'
import {SystemGeneratedRow} from '../../../infrastructure/row/SystemGeneratedRow'
import {PollVariation}      from '../PollVariation'

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
