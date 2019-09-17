import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                 from '@airport/air-control'
import {Language}                 from '../Language'
import {Poll}                     from './Poll'
import {PollVariationTranslation} from './PollVariationTranslation'

export type PollTranslation_Id = number
export type PollTranslation_Name = string
export type PollTranslation_Description = string

/**
 * This the computed translation (based on most pinned poll variation).
 *
 */
@Entity()
@Table({name: 'FACTOR_VARIATION_TRANSLATIONS'})
export class PollTranslation {

	@Id()
	@GeneratedValue()
	@Column({name: 'FACTOR_VARIATION_TRANSLATION_ID'})
	id: PollTranslation_Id

	@Column({name: 'POLL_TRANSLATION_NAME', nullable: false})
	name: PollTranslation_Name

	@Column({name: 'POLL_TRANSLATION_DESCRIPTION', nullable: false})
	description: PollTranslation_Description

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@ManyToOne()
	@JoinColumn({
		name: 'CURRENT_POLL_VARIATION_TRANSLATION_ID',
		nullable: false,
		referencedColumnName: 'POLL_VARIATION_TRANSLATION_ID'
	})
	currentVariation: PollVariationTranslation

}
