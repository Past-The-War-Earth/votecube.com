import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                               from '@airport/air-traffic-control'
import {
	PositionOpinionVersionTranslation_Id,
	PositionOpinionVersionTranslation_IsOriginal,
	PositionOpinionVersionTranslation_Text,
	PositionOpinionVersionTranslation_Title
} from '../../../types/opinion/translation/PositionOpinionVersionTranslation'
import {Language}               from '../../infrastructure/Language'
import {SystemGeneratedRow}     from '../../infrastructure/row/SystemGeneratedRow'
import {PositionOpinionVersion} from '../PositionOpinionVersion'

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
	@Column({name: 'IS_ORIGINAL', nullable: false})
	original: PositionOpinionVersionTranslation_IsOriginal

	@Column({name: 'TITLE', nullable: false})
	title: PositionOpinionVersionTranslation_Title

	@Column({name: 'TEXT', nullable: false})
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
