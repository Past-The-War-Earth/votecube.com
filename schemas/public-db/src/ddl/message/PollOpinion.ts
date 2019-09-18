import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                     from '@airport/air-control'
import {CascadeType}                  from '@airport/ground-control'
import {ImmutableRow}                 from '../infrastructure/ImmutableRow'
import {Language}                     from '../infrastructure/Language'
import {Actor}                        from '../user/Actor'
import {VoteVariation}                from '../vote/VoteVariation'
import {PollOpinionResponse}          from './PollOpinionResponse'
import {PollOpinionSuitabilityRating} from './PollOpinionSuitabilityRating'
import {PollOpinionTranslation}       from './PollOpinionTranslation'

export type PollOpinion_Id = number
export type PollOpinion_Title = string
export type PollOpinion_Text = string

/**
 * This the computed translation (based on most pinned factor variation).
 *
 */
@Entity()
@Table({name: 'POLL_OPINIONS'})
export class PollOpinion
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_OPINION_ID'})
	id: PollOpinion_Id

	@Column({name: 'POLL_OPINION_TITLE', nullable: false})
	name: PollOpinion_Title

	@Column({name: 'POLL_OPINION_TEXT', nullable: false})
	description: PollOpinion_Text

	@ManyToOne()
	@JoinColumn({name: 'VOTE_VARIATION_ID', nullable: false})
	voteVariation: VoteVariation

	@ManyToOne()
	@JoinColumn({name: 'ACTOR_ID', nullable: false})
	actor: Actor

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollOpinion'})
	suitabilityRatings: PollOpinionSuitabilityRating[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollOpinion'})
	childResponses: PollOpinionResponse[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollOpinion'})
	translations: PollOpinionTranslation[]

}
