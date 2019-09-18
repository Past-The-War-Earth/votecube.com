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
import {Language}          from '../../infrastructure/Language'
import {PositionVariation} from './PositionVariation'

export type PositionVariationTranslation_Id = number
export type PositionVariationTranslation_Description = string

@Entity()
@Table({name: 'POSITION_VARIATION_TRANSLATIONS'})
export class PositionVariationTranslation {

	@Id()
	@GeneratedValue()
	@Column({name: 'POSITION_VARIATION_TRANSLATION_ID'})
	id: PositionVariationTranslation_Id

	@Column({name: 'POSITION_VARIATION_TRANSLATION_DESCRIPTION'})
	description: PositionVariationTranslation_Description

	@ManyToOne()
	@JoinColumn({name: 'POSITION_VARIATION_ID'})
	variation: PositionVariation

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POSITION_VARIATION_TRANSLATION_ID',
		referencedColumnName: 'POSITION_VARIATION_TRANSLATION_ID'
	})
	parentTranslation: PositionVariation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parentTranslation'})
	childTranslations: PositionVariationTranslation[]

}
