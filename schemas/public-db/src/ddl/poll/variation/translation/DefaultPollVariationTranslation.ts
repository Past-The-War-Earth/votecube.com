import {
	Entity,
	JoinColumn,
	ManyToOne,
	Table
}                                 from '@airport/air-control'
import {PollVariation}            from '../PollVariation'
import {PollVariationTranslation} from './PollVariationTranslation'

@Entity()
@Table({name: 'DEFAULT_POLL_VARIATION_TRANSLATIONS'})
export class DefaultPollVariationTranslation {

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_TRANSLATION_ID'})
	pollVariationTranslation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_TRANSLATION_VARIATION_ID'})
	translation: PollVariationTranslation

}
