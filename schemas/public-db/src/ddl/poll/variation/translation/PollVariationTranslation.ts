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
import {PollVariationTranslationRating}   from './PollVariationTranslationRating'

export type PollVariationTranslation_Id = number
export type PollVariationTranslation_Name = string
export type PollVariationTranslation_Description = string

/**
 * This the translation of a given poll variation.
 *
 */
@Entity()
@Table({name: 'POLL_VARIATION_TRANSLATIONS'})
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

	@Column({name: 'POLL_NAME'})
	name: PollVariationTranslation_Name

	@Column({name: 'POLL_DESCRIPTION'})
	description: PollVariationTranslation_Description

	@ManyToOne()
	@JoinColumn({name: 'TRANSLATION_TYPE_ID'})
	type: TranslationType

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_VARIATION_TRANSLATION_ID',
		referencedColumnName: 'POLL_VARIATION_TRANSLATION_ID'
	})
	parent: PollVariationTranslation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PollVariationTranslation[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollVariationTranslation'})
	factors: PollVariationFactorTranslation[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollVariationTranslation'})
	positions: PollVariationPositionTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'translation'})
	ratings: PollVariationTranslationRating[]

}
