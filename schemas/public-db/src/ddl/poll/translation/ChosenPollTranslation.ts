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
import {PollVariation}             from '../../..'
import {Language}                  from '../../infrastructure/Language'
import {SystemGeneratedRow}        from '../../infrastructure/SystemGeneratedRow'
import {Poll}                      from '../Poll'
import {PollVariationTranslation}  from '../variation/translation/PollVariationTranslation'
import {ChosenPollTranslationType} from './ChosenPollTranslationType'

export type ChosenPollTranslation_Id = number

/**
 * This the computed translation (based on most pinned poll variation).
 *
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
	 * Nullable because may be chosen for a Variation and not the whole Poll.
	 */
	@ManyToOne()
	@JoinColumn({name: 'POLL_ID'})
	poll: Poll

	/**
	 * Nullable because may be chosen for the whole Poll and no Variations.
	 */
	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pollVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@ManyToOne()
	@JoinColumn({name: 'CHOSEN_POLL_TRANSLATION_TYPE_ID'})
	type: ChosenPollTranslationType

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollTranslation'})
	variationTranslation: PollVariationTranslation[]


}
