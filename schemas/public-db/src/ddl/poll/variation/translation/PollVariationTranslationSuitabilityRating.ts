import {
	Entity,
	JoinColumn,
	ManyToOne,
	Table
}                                 from '@airport/air-control'
import {SuitabilityRating}        from '../../../infrastructure/SuitabilityRating'
import {PollVariationTranslation} from './PollVariationTranslation'

@Entity()
@Table({name: 'POLL_VARIATION_TRANSLATION_SUITABILITY_RATING'})
export class PollVariationTranslationSuitabilityRating {

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_TRANSLATION_ID'})
	pollVariationTranslation: PollVariationTranslation

	@ManyToOne()
	@JoinColumn({name: 'SUITABILITY_RATING_ID'})
	suitabilityRating: SuitabilityRating

}
