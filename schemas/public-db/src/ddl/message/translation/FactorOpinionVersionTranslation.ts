import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                             from '@airport/air-control'
import {Language}             from '../../infrastructure/Language'
import {SystemGeneratedRow}   from '../../infrastructure/SystemGeneratedRow'
import {FactorOpinionVersion} from '../FactorOpinionVersion'

export type FactorOpinionVersionTranslation_Id = number
export type FactorOpinionVersionTranslation_Title = string
export type FactorOpinionVersionTranslation_Text = string
export type FactorOpinionVersionTranslation_IsOriginal = boolean

/**
 * Belongs to FactorOpinionVersion - does not need user tracking.
 */
@Entity()
@Table({name: 'FACTOR_OPINION_VERSION_TRANSLATIONS'})
export class FactorOpinionVersionTranslation
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'FACTOR_OPINION_VERSION_TRANSLATION_ID'})
	id: FactorOpinionVersionTranslation_Id

	/**
	 * All translations should come from the original version.
	 */
	@Column({name: 'FACTOR_OPINION_VERSION_TRANSLATION_IS_ORIGINAL', nullable: false})
	original: FactorOpinionVersionTranslation_IsOriginal

	@Column({name: 'FACTOR_OPINION_VERSION_TRANSLATION_TITLE', nullable: false})
	title: FactorOpinionVersionTranslation_Title

	@Column({name: 'FACTOR_OPINION_VERSION_TRANSLATION_TEXT', nullable: false})
	text: FactorOpinionVersionTranslation_Text

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_OPINION_VERSION_ID', nullable: false})
	factorOpinionVersion: FactorOpinionVersion

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID', nullable: false})
	language: Language

	/*
		No translation types for Opinions, they are always machine generated
		@ManyToOne()
		@JoinColumn({name: 'TRANSLATION_TYPE_ID', nullable: false})
		translationType: TranslationType
	*/

}
