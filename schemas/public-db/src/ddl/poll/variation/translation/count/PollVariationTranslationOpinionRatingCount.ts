import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                                 from '@airport/air-control'
import {
	PollVariationTranslationOpinionRatingCount_Count,
	PollVariationTranslationOpinionRatingCount_Id
}                                 from '../../../../../types/poll/variation/translation/count/PollVariationTranslationOpinionRatingCount'
import {Rating}                   from '../../../../infrastructure/rating/Rating'
import {SystemGeneratedRow}       from '../../../../infrastructure/row/SystemGeneratedRow'
import {PollVariationTranslation} from '../PollVariationTranslation'

/**
 * Count of all opinion ratings (including reversals).
 */
@Entity()
@Table({name: 'POLL_VARIATION_TRANSLATION_OPINION_RATING_COUNTS'})
export class PollVariationTranslationOpinionRatingCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_VARIATION_TRANSLATION_OPINION_RATING_COUNT_ID'})
	id: PollVariationTranslationOpinionRatingCount_Id

	@Column({name: 'COUNT'})
	count: PollVariationTranslationOpinionRatingCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_TRANSLATION_ID'})
	pollVariationTranslation: PollVariationTranslation

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
