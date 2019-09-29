import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                                 from '@airport/air-control'
import {
	PollVariationTranslationRatingCount_Count,
	PollVariationTranslationRatingCount_Id
}                                 from '../../../../../types/poll/variation/translation/count/PollVariationTranslationRatingCount'
import {Rating}                   from '../../../../infrastructure/rating/Rating'
import {SystemGeneratedRow}       from '../../../../infrastructure/row/SystemGeneratedRow'
import {PollVariationTranslation} from '../PollVariationTranslation'

/**
 * Computation of all ratings (including reversals).
 */
@Entity()
@Table({name: 'POLL_VARIATION_TRANSLATION_RATING_COUNTS'})
export class PollVariationTranslationRatingCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_VARIATION_TRANSLATION_RATING_COUNT_ID'})
	id: PollVariationTranslationRatingCount_Id

	@Column({name: 'COUNT'})
	count: PollVariationTranslationRatingCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_TRANSLATION_ID'})
	pollVariationTranslation: PollVariationTranslation

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
