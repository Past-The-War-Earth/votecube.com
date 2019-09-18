import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                               from '@airport/air-control'
import {CascadeType}            from '@airport/ground-control'
import {Language}               from '../../infrastructure/Language'
import {Poll}                   from '../Poll'
import {DefaultPollTranslation} from './DefaultPollTranslation'

export type PollTranslation_Id = number

/**
 * This the computed translation (based on most pinned poll variation).
 *
 */
@Entity()
@Table({name: 'POLL_TRANSLATIONS'})
export class PollTranslation {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_TRANSLATION_ID'})
	id: PollTranslation_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollTranslation'})
	defaultTranslation: DefaultPollTranslation[]

}
