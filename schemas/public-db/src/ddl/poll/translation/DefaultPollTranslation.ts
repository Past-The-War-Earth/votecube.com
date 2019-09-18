import {
	Entity,
	JoinColumn,
	ManyToOne,
	Table
}                                 from '@airport/air-control'
import {PollVariationTranslation} from '../variation/translation/PollVariationTranslation'
import {PollTranslation}          from './PollTranslation'

@Entity()
@Table({name: 'DEFAULT_POLL_TRANSLATIONS'})
export class DefaultPollTranslation {

	@ManyToOne()
	@JoinColumn({name: 'POLL_TRANSLATION_ID'})
	pollTranslation: PollTranslation

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_TRANSLATION_ID'})
	variation: PollVariationTranslation

}
