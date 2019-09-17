import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                     from '@airport/air-control'
import {ImmutableRow} from '../ImmutableRow'
import {Language}     from '../Language'
import {PollOpinionResponse}  from './PollOpinionResponse'

export type PollOpinionResponseTranslation_Id = number
export type PollOpinionResponseTranslation_Title = string
export type PollOpinionResponseTranslation_Text = string

/**
 * This the computed translation (based on most pinned factor variation).
 *
 */
@Entity()
@Table({name: 'POLL_OPINION_RESPONSE_TRANSLATIONS'})
export class PollOpinionResponseTranslation
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_OPINION_RESPONSE_TRANSLATION_ID'})
	id: PollOpinionResponseTranslation_Id

	@Column({name: 'POLL_OPINION_RESPONSE_TRANSLATION_TITLE', nullable: false})
	title: PollOpinionResponseTranslation_Title

	@Column({name: 'POLL_OPINION_RESPONSE_TRANSLATION_TEXT', nullable: false})
	text: PollOpinionResponseTranslation_Text

	@ManyToOne()
	@JoinColumn({name: 'POLL_OPINION_RESPONSE_ID', nullable: false})
	pollOpinionResponse: PollOpinionResponse

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID', nullable: false})
	language: Language

}
