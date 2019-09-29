import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                          from '@airport/air-control'
import {CascadeType}       from '@airport/ground-control'
import {
	FactorVariationTranslation_Description,
	FactorVariationTranslation_Id,
	FactorVariationTranslation_Name
}                          from '../../types/factor/FactorVariationTranslation'
import {Language}          from '../infrastructure/Language'
import {ImmutableActorRow} from '../infrastructure/row/ImmutableActorRow'
import {Factor}            from './Factor'
import {FactorVariation}   from './FactorVariation'

@Entity()
@Table({name: 'FACTOR_VARIATION_TRANSLATIONS'})
export class FactorVariationTranslation
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'FACTOR_VARIATION_TRANSLATION_ID'})
	id: FactorVariationTranslation_Id

	@Column({name: 'FACTOR_NAME'})
	name: FactorVariationTranslation_Name

	@Column({name: 'FACTOR_DESCRIPTION'})
	description: FactorVariationTranslation_Description

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_VARIATION_ID'})
	factorVariation: FactorVariation

	/* Cannot be used because FactorVariationTranslations can be reused
	 across polls
		// A shortcut to get to this translation quicker from Poll Variation quicker
		@ManyToOne()
		@JoinColumn({name: 'POLL_VARIATION_ID'})
		pollVariation: PollVariation
	*/

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_FACTOR_VARIATION_TRANSLATION_ID',
		referencedColumnName: 'FACTOR_VARIATION_TRANSLATION_ID'
	})
	parent: FactorVariationTranslation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: FactorVariationTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parentTranslation'})
	childFactors: Factor

	/*
		No translation types for Factors/Positions,
		they always come along with the poll.
		@ManyToOne()
		@JoinColumn({name: 'TRANSLATION_TYPE_ID', nullable: false})
		translationType: TranslationType
	 */

}
