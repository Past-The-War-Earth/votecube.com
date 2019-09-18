import {
	Entity,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                   from '@airport/air-control'
import {FactorVariationTranslation} from '../../../factor/FactorVariationTranslation'
import {PollVariationTranslation}   from './PollVariationTranslation'

@Entity()
@Table({name: 'POLL_VARIATION_FACTOR_TRANSLATIONS'})
export class PollVariationFactorTranslation {

	@Id()
	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_TRANSLATION_ID'})
	pollVariationTranslation: PollVariationTranslation

	@Id()
	@ManyToOne()
	@JoinColumn({name: 'FACTOR_VARIATION_TRANSLATION_ID'})
	factorVariationTranslation: FactorVariationTranslation

}
