import {
	Entity,
	JoinColumn,
	ManyToOne,
	Table
}                          from '@airport/air-control'
import {SuitabilityRating} from '../../infrastructure/SuitabilityRating'
import {PollVariation}     from './PollVariation'

@Entity()
@Table({name: 'POLL_VARIATION_SUITABILITY_RATING'})
export class PollVariationSuitabilityRating {

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pollVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'SUITABILITY_RATING_ID'})
	suitabilityRating: SuitabilityRating

}
