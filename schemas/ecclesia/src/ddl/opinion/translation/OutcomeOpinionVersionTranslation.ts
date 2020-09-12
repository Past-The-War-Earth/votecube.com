import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-control'
import {
	OutcomeOpinionVersionTranslation_Id,
	OutcomeOpinionVersionTranslation_IsOriginal,
	OutcomeOpinionVersionTranslation_Text,
	OutcomeOpinionVersionTranslation_Title
}                              from '../../../types/opinion/translation/OutcomeOpinionVersionTranslation'
import {Language}              from '../../infrastructure/Language'
import {SystemGeneratedRow}    from '../../infrastructure/row/SystemGeneratedRow'
import {OutcomeOpinionVersion} from '../OutcomeOpinionVersion'

/**
 * Belongs to FactorOpinionVersion - does not need user tracking.
 */
@Entity()
@Table({name: 'OUTCOME_OPINION_VERSION_TRANSLATIONS'})
export class OutcomeOpinionVersionTranslation
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'OUTCOME_OPINION_VERSION_TRANSLATION_ID'})
	id: OutcomeOpinionVersionTranslation_Id

	/**
	 * All translations should come from the original version.
	 */
	@Column({name: 'IS_ORIGINAL', nullable: false})
	original: OutcomeOpinionVersionTranslation_IsOriginal

	@Column({name: 'TITLE', nullable: false})
	title: OutcomeOpinionVersionTranslation_Title

	@Column({name: 'TEXT', nullable: false})
	text: OutcomeOpinionVersionTranslation_Text

	@ManyToOne()
	@JoinColumn({name: 'OUTCOME_OPINION_VERSION_ID', nullable: false})
	outcomeOpinionVersion: OutcomeOpinionVersion

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
