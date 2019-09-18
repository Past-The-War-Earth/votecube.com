import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                   from '@airport/air-control'
import {ImmutableRow}               from '../infrastructure/ImmutableRow'
import {Language}                   from '../infrastructure/Language'
import {Factor}                     from './Factor'
import {FactorVariationTranslation} from './FactorVariationTranslation'

export type FactorTranslation_Id = number
export type FactorTranslation_Name = string
export type FactorTranslation_Description = string

/**
 * This the computed translation (based on most pinned factor variation).
 *
 */
@Entity()
@Table({name: 'FACTOR_TRANSLATIONS'})
export class FactorTranslation
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'FACTOR_TRANSLATION_ID'})
	id: FactorTranslation_Id

	@Column({name: 'FACTOR_TRANSLATION_NAME', nullable: false})
	name: FactorTranslation_Name

	@Column({name: 'FACTOR_TRANSLATION_DESCRIPTION', nullable: false})
	description: FactorTranslation_Description

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_ID', nullable: false})
	factor: Factor

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@ManyToOne()
	@JoinColumn({
		name: 'CURRENT_POLL_VARIATION_TRANSLATION_ID',
		nullable: false,
		referencedColumnName: 'POLL_VARIATION_TRANSLATION_ID'
	})
	currentVariation: FactorVariationTranslation

}
