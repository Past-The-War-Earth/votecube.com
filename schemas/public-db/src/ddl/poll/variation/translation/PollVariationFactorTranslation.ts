import {
	Entity,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                   from '@airport/air-control'
import {FactorVariationTranslation} from '../../../factor/FactorVariationTranslation'
import {PollVariationTranslation}   from './PollVariationTranslation'

/**
 * Needed because Factor Translations can be shared across polls and
 * poll variations.
 */
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
