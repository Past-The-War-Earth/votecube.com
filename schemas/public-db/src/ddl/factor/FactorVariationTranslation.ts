import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                      from '@airport/air-control'
import {CascadeType}   from '@airport/ground-control'
import {Language}      from '../Language'
import {Factor}          from './Factor'
import {FactorVariation} from './FactorVariation'

export type FactorVariationTranslation_Id = number
export type FactorVariationTranslation_Name = number

@Entity()
@Table({name: 'FACTOR_VARIATION_TRANSLATION'})
export class FactorVariationTranslation {

	@Id()
	@GeneratedValue()
	@Column({name: 'FACTOR_VARIATION_TRANSLATION_ID'})
	id: FactorVariationTranslation_Id

	@Column({name: 'FACTOR_VARIATION_TRANSLATION_DESCRIPTION'})
	name: FactorVariationTranslation_Name

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_ID'})
	poll: Factor

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_VARIATION_ID'})
	variation: FactorVariation

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_FACTOR_VARIATION_TRANSLATION_ID',
		referencedColumnName: 'FACTOR_VARIATION_TRANSLATION_ID'
	})
	parentTranslation: FactorVariation

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollVariationTranslation'})
	factorVariationTranslations: FactorVariationTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollVariationTranslation'})
	positionVariationTranslations: PositionVariationTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parentTranslation'})
	childTranslations: FactorVariationTranslation[]

}
