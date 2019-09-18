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
import {FactorOpinion}  from './FactorOpinion'

export type FactorOpinionTranslation_Id = number
export type FactorOpinionTranslation_Title = string
export type FactorOpinionTranslation_Text = string

/**
 * This the computed translation (based on most pinned factor variation).
 *
 */
@Entity()
@Table({name: 'FACTOR_OPINION_TRANSLATIONS'})
export class FactorOpinionTranslation
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'FACTOR_OPINION_TRANSLATION_ID'})
	id: FactorOpinionTranslation_Id

	@Column({name: 'FACTOR_OPINION_TRANSLATION_TITLE', nullable: false})
	title: FactorOpinionTranslation_Title

	@Column({name: 'FACTOR_OPINION_TRANSLATION_TEXT', nullable: false})
	text: FactorOpinionTranslation_Text

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_OPINION_ID', nullable: false})
	factorOpinion: FactorOpinion

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID', nullable: false})
	language: Language

}
