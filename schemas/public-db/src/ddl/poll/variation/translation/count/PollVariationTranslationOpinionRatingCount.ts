import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                                 from '@airport/air-control'
import {Rating}                   from '../../../../infrastructure/rating/Rating'
import {SystemGeneratedRow}       from '../../../../infrastructure/SystemGeneratedRow'
import {PollVariationTranslation} from '../PollVariationTranslation'

export type PollVariationTranslationOpinionRatingCount_Id = number
export type PollVariationTranslationOpinionRatingCount_Count = number

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
