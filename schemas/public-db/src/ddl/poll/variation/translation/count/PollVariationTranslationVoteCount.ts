import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                                 from '@airport/air-control'
import {
	PollVariationTranslationVoteCount_Count,
	PollVariationTranslationVoteCount_Id
}                                 from '../../../../../types/poll/variation/translation/count/PollVariationTranslationVoteCount'
import {SystemGeneratedRow}       from '../../../../infrastructure/row/SystemGeneratedRow'
import {PollVariationTranslation} from '../PollVariationTranslation'

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
