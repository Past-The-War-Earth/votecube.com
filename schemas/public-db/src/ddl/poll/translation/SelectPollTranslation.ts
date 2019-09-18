import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                  from '@airport/air-control'
import {CascadeType}               from '@airport/ground-control'
import {Language}                  from '../../infrastructure/Language'
import {Poll}                      from '../Poll'
import {PollVariationTranslation}  from '../variation/translation/PollVariationTranslation'
import {SelectPollTranslationType} from './SelectPollTranslationType'

export type SelectPollTranslation_Id = number

/**
 * This the computed translation (based on most pinned poll variation).
 *
 */
@Entity()
@Table({name: 'POLL_TRANSLATIONS'})
export class SelectPollTranslation {

	@Id()
	@GeneratedValue()
	@Column({name: 'SELECT_POLL_TRANSLATION_ID'})
	id: SelectPollTranslation_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@ManyToOne()
	@JoinColumn({name: 'SELECT_POLL_TRANSLATION_TYPE_ID'})
	type: SelectPollTranslationType

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollTranslation'})
	variationTranslation: PollVariationTranslation[]


}
