import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                       from '@airport/air-control'
import {CascadeType}                    from '@airport/ground-control'
import {Language}                       from '../../../infrastructure/Language'
import {PollVariation}                  from '../PollVariation'
import {PollVariationTranslationRating} from './PollVariationTranslationRating'

export type PollVariationTranslation_Id = number
export type PollVariationTranslation_Name = number
export type PollVariationTranslation_Description = string

/**
 * This the translation of a given poll variation.
 *
 */
@Entity()
@Table({name: 'POLL_VARIATION_TRANSLATION_INSTANCE'})
export class PollVariationTranslationInstance {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_VARIATION_TRANSLATION_INSTANCE_ID'})
	id: PollVariationTranslation_Id

	@Column({name: 'POLL_NAME'})
	name: PollVariationTranslation_Name

	@Column({name: 'POLL_DESCRIPTION'})
	description: PollVariationTranslation_Description

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	variation: PollVariation

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_VARIATION_TRANSLATION_INSTANCE_ID',
		referencedColumnName: 'POLL_VARIATION_TRANSLATION_INSTANCE_ID'
	})
	parentTranslation: PollVariationTranslationInstance

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	/*
	* Poll to Factor/Position transation relationship is tracked via the Poll itself
	*
	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollVariationTranslation'})
	factorVariationTranslations: FactorVariationTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollVariationTranslation'})
	positionVariationTranslations: PositionVariationTranslation[]
*/

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parentTranslation'})
	childTranslations: PollVariationTranslationInstance[]

}
