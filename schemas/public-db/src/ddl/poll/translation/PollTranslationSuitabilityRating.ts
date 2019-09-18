import {
	Entity,
	JoinColumn,
	ManyToOne,
	Table
}                                 from '@airport/air-control'
import {SuitabilityRating}        from '../../infrastructure/SuitabilityRating'
import {PollTranslation} from './PollTranslation'

@Entity()
@Table({name: 'POLL_TRANSLATION_SUITABILITY_RATINGS'})
export class PollTranslationSuitabilityRating {

	@ManyToOne()
	@JoinColumn({name: 'POLL_TRANSLATION_ID'})
	pollTranslation: PollTranslation

	@ManyToOne()
	@JoinColumn({name: 'SUITABILITY_RATING_ID'})
	suitabilityRating: SuitabilityRating

}
