import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                     from '@airport/air-control'
import {ImmutableRow} from '../infrastructure/ImmutableRow'
import {Language}     from '../infrastructure/Language'
import {PollOpinion}  from './PollOpinion'

export type PollOpinionTranslation_Id = number
export type PollOpinionTranslation_Title = string
export type PollOpinionTranslation_Text = string

/**
 * This the computed translation (based on most pinned factor variation).
 *
 */
@Entity()
@Table({name: 'POLL_OPINION_TRANSLATIONS'})
export class PollOpinionTranslation
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_OPINION_TRANSLATION_ID'})
	id: PollOpinionTranslation_Id

	@Column({name: 'POLL_OPINION_TRANSLATION_TITLE', nullable: false})
	title: PollOpinionTranslation_Title

	@Column({name: 'POLL_OPINION_TRANSLATION_TEXT', nullable: false})
	text: PollOpinionTranslation_Text

	@ManyToOne()
	@JoinColumn({name: 'POLL_OPINION_ID', nullable: false})
	pollOpinion: PollOpinion

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID', nullable: false})
	language: Language

}
