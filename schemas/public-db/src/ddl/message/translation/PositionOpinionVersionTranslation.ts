import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                               from '@airport/air-control'
import {Language}               from '../../infrastructure/Language'
import {SystemGeneratedRow}     from '../../infrastructure/SystemGeneratedRow'
import {PositionOpinionVersion} from '../PositionOpinionVersion'

export type PositionOpinionVersionTranslation_Id = number
export type PositionOpinionVersionTranslation_Title = string
export type PositionOpinionVersionTranslation_Text = string
export type PositionOpinionVersionTranslation_IsOriginal = boolean

/**
 * Belongs to PositionOpinionVersion - does not need user tracking.
 */
@Entity()
@Table({name: 'POSITION_OPINION_VERSION_TRANSLATIONS'})
export class PositionOpinionVersionTranslation
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POSITION_OPINION_VERSION_TRANSLATION_ID'})
	id: PositionOpinionVersionTranslation_Id

	/**
	 * All translations should come from the original version.
	 */
	@Column({name: 'FACTOR_OPINION_VERSION_TRANSLATION_IS_ORIGINAL', nullable: false})
	original: PositionOpinionVersionTranslation_IsOriginal

	@Column({name: 'POSITION_OPINION_VERSION_TRANSLATION_TITLE', nullable: false})
	title: PositionOpinionVersionTranslation_Title

	@Column({name: 'POSITION_OPINION_VERSION_TRANSLATION_TEXT', nullable: false})
	text: PositionOpinionVersionTranslation_Text

	@ManyToOne()
	@JoinColumn({name: 'POSITION_OPINION_VERSION_ID', nullable: false})
	positionOpinionVersion: PositionOpinionVersion

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID', nullable: false})
	language: Language

	/*
		No translation types for Opinions, they are always machine generated
		@ManyToOne()
		@JoinColumn({name: 'TRANSLATION_TYPE_ID', nullable: false})
		translationVersionType: TranslationVersionType
	*/

}
