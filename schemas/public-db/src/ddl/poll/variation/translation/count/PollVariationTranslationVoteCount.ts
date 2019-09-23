import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                                 from '@airport/air-control'
import {SystemGeneratedRow}       from '../../../../infrastructure/SystemGeneratedRow'
import {PollVariationTranslation} from '../PollVariationTranslation'

export type PollVariationTranslationVoteCount_Id = number
export type PollVariationTranslationVoteCount_Count = number

/**
 * Count of all votes.
 */
@Entity()
@Table({name: 'POLL_VARIATION_TRANSLATION_VOTE_COUNTS'})
export class PollVariationTranslationVoteCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_VARIATION_TRANSLATION_VOTE_COUNT_ID'})
	id: PollVariationTranslationVoteCount_Id

	@Column({name: 'COUNT'})
	count: PollVariationTranslationVoteCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_TRANSLATION_ID'})
	pollVariationTranslation: PollVariationTranslation

}
