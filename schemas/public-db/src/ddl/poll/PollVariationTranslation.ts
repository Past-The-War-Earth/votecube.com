import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                     from '@airport/air-control'
import {CascadeType}                  from '@airport/ground-control'
import {FactorVariationTranslation}   from '../factor/FactorVariationTranslation'
import {PositionVariationTranslation} from '../factor/position/PositionVariationTranslation'
import {Language}                     from '../Language'
import {PollVariation}                from './PollVariation'

export type PollVariationTranslation_Id = number
export type PollVariationTranslation_Name = number

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

	@Column({name: 'POLL_VARIATION_TRANSLATION_NAME'})
	name: PollVariationTranslation_Name

	@Column({name: 'POLL_VARIATION_TRANSLATION_DESCRIPTION'})
	description: PollVariationTranslation_Name

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	variation: PollVariation

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_VARIATION_TRANSLATION_ID',
		referencedColumnName: 'POLL_VARIATION_TRANSLATION_ID'
	})
	parentTranslation: PollVariationTranslation

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollVariationTranslation'})
	factorVariationTranslations: FactorVariationTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollVariationTranslation'})
	positionVariationTranslations: PositionVariationTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parentTranslation'})
	childTranslations: PollVariationTranslation[]

}
