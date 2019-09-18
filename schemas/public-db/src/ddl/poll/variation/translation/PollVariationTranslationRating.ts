import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                 from '@airport/air-control'
import {Rating}                   from '../../../infrastructure/Rating/Rating'
import {PollVariationTranslation} from './PollVariationTranslation'

export type PollVariationTranslationRating_Id = number

/**
 * This is the rating for the overall Poll translation.  Based on the
 * actual changes made the effective rating of the different translated
 * parts can be computed.
 */
@Entity()
@Table({name: 'POLL_VARIATION_TRANSLATION_RATING'})
export class PollVariationTranslationRating {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_VARIATION_TRANSLATION_RATING_ID'})
	id: PollVariationTranslationRating_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_TRANSLATION_ID'})
	translation: PollVariationTranslation

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
