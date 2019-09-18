import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                        from '@airport/air-control'
import {CascadeType}     from '@airport/ground-control'
import {Language}        from '../infrastructure/Language'
import {FactorVariation} from './FactorVariation'

export type FactorVariationTranslation_Id = number
export type FactorVariationTranslation_Name = string
export type FactorVariationTranslation_Description = string

@Entity()
@Table({name: 'FACTOR_VARIATION_TRANSLATIONS'})
export class FactorVariationTranslation {

	@Id()
	@GeneratedValue()
	@Column({name: 'FACTOR_VARIATION_TRANSLATION_ID'})
	id: FactorVariationTranslation_Id

	@Column({name: 'FACTOR_VARIATION_TRANSLATION_DESCRIPTION'})
	name: FactorVariationTranslation_Name

	@Column({name: 'FACTOR_VARIATION_TRANSLATION_DESCRIPTION'})
	description: FactorVariationTranslation_Description

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_VARIATION_ID'})
	variation: FactorVariation

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_FACTOR_VARIATION_TRANSLATION_ID',
		referencedColumnName: 'FACTOR_VARIATION_TRANSLATION_ID'
	})
	parentTranslation: FactorVariation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parentTranslation'})
	childTranslations: FactorVariationTranslation[]

}
