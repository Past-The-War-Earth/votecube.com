import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                   from '@airport/air-traffic-control'
import {
	PollRevisionOpinionVersionTranslation_Id,
	PollRevisionOpinionVersionTranslation_IsOriginal,
	PollRevisionOpinionVersionTranslation_Text,
	PollRevisionOpinionVersionTranslation_Title
}                                   from '../../../types/opinion/translation/PollRevisionOpinionVersionTranslation'
import {Language}                   from '../../infrastructure/Language'
import {SystemGeneratedRow}         from '../../infrastructure/row/SystemGeneratedRow'
import {PollRevisionOpinionVersion} from '../PollRevisionOpinionVersion'

/**
 * Belongs to PollRevisionOpinionVersion - does not need user tracking.
 */
@Entity()
@Table({name: 'POLL_REVISION_OPINION_VERSION_TRANSLATIONS'})
export class PollRevisionOpinionVersionTranslation
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_REVISION_OPINION_VERSION_TRANSLATION_ID'})
	id: PollRevisionOpinionVersionTranslation_Id

	/**
	 * All translations should come from the original version.
	 */
	@Column({name: 'POLL_REVISION_OPINION_VERSION_TRANSLATION_IS_ORIGINAL', nullable: false})
	original: PollRevisionOpinionVersionTranslation_IsOriginal

	@Column({name: 'POLL_REVISION_OPINION_VERSION_TRANSLATION_TITLE', nullable: false})
	title: PollRevisionOpinionVersionTranslation_Title

	@Column({name: 'POLL_REVISION_OPINION_VERSION_TRANSLATION_TEXT', nullable: false})
	text: PollRevisionOpinionVersionTranslation_Text

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_OPINION_VERSION_ID', nullable: false})
	opinionVersion: PollRevisionOpinionVersion

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
