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
import {ChosenPollTranslation_Id}  from '../../../types/poll/translation/ChosenPollTranslation'
import {Language}                  from '../../infrastructure/Language'
import {SystemGeneratedRow}        from '../../infrastructure/row/SystemGeneratedRow'
import {Poll}                    from '../Poll'
import {PollRevision}            from '../revision/PollRevision'
import {PollRevisionTranslation} from '../revision/translation/PollRevisionTranslation'
import {ChosenPollTranslationType} from './ChosenPollTranslationType'

/**
 * This the computed translation (based on most pinned poll revision).
 * Note that you can have multiple translations active at the same time,
 * even within the same language (like standard and a funny or cynical
 * translation).
 */
@Entity()
@Table({name: 'CHOSEN_POLL_TRANSLATIONS'})
export class ChosenPollTranslation
	extends SystemGeneratedRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'CHOSEN_POLL_TRANSLATION_ID'})
	id: ChosenPollTranslation_Id

	/**
	 * Nullable because may be chosen for a Revision and not the whole Poll.
	 */
	@ManyToOne()
	@JoinColumn({name: 'POLL_ID'})
	poll: Poll

	/**
	 * Nullable because may be chosen for the whole Poll and no Revisions.
	 */
	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_ID'})
	pollRevision: PollRevision

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@ManyToOne()
	@JoinColumn({name: 'CHOSEN_POLL_TRANSLATION_TYPE_ID'})
	type: ChosenPollTranslationType

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollTranslation'})
	revisionTranslation: PollRevisionTranslation[]


}
