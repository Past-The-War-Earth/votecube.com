import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                         from '@airport/air-control'
import {CascadeType}                      from '@airport/ground-control'
import {Language}                         from '../../../infrastructure/Language'
import {TranslationType}                  from '../../../infrastructure/TranslationType'
import {PollVariation}                    from '../PollVariation'
import {PollVariationFactorTranslation}   from './PollVariationFactorTranslation'
import {PollVariationPositionTranslation} from './PollVariationPositionTranslation'
import {PollVariationTranslationInstance} from './PollVariationTranslationInstance'
import {PollVariationTranslationRating}   from './PollVariationTranslationRating'

export type PollVariationTranslation_Id = number

/**
 * This the translation of a given poll variation.
 *
 */
@Entity()
@Table({name: 'POLL_VARIATION_TRANSLATION'})
export class PollVariationTranslation {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_VARIATION_TRANSLATION_ID'})
	id: PollVariationTranslation_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pollVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_TRANSLATION_INSTANCE_ID'})
	instance: PollVariationTranslationInstance

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollVariationTranslation'})
	factors: PollVariationFactorTranslation[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollVariationTranslation'})
	positions: PollVariationPositionTranslation[]

	@ManyToOne()
	@JoinColumn({name: 'TRANSLATION_TYPE_ID'})
	type: TranslationType

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'translation'})
	ratings: PollVariationTranslationRating[]

}
