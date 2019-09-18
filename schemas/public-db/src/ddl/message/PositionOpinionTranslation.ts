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
import {PositionOpinion}  from './PositionOpinion'

export type PositionOpinionTranslation_Id = number
export type PositionOpinionTranslation_Title = string
export type PositionOpinionTranslation_Text = string

/**
 * This the computed translation (based on most pinned position variation).
 *
 */
@Entity()
@Table({name: 'POSITION_OPINION_TRANSLATIONS'})
export class PositionOpinionTranslation
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POSITION_OPINION_TRANSLATION_ID'})
	id: PositionOpinionTranslation_Id

	@Column({name: 'POSITION_OPINION_TRANSLATION_TITLE', nullable: false})
	title: PositionOpinionTranslation_Title

	@Column({name: 'POSITION_OPINION_TRANSLATION_TEXT', nullable: false})
	text: PositionOpinionTranslation_Text

	@ManyToOne()
	@JoinColumn({name: 'POSITION_OPINION_ID', nullable: false})
	positionOpinion: PositionOpinion

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID', nullable: false})
	language: Language

}
