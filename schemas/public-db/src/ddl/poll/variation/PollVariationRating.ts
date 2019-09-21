import {
	Entity,
	JoinColumn,
	ManyToOne,
	Table
}                          from '@airport/air-control'
import {Rating} from '../../infrastructure/Rating/Rating'
import {PollVariation}     from './PollVariation'

/**
 * TODO: to be computed from PollVariationTranslationInstanceRating,
 * manually inserted for now
 */
@Entity()
@Table({name: 'POLL_VARIATION_RATINGS'})
export class PollVariationRating {

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pollVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
