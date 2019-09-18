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
import {ImmutableRow}           from '../infrastructure/ImmutableRow'
import {Language}               from '../infrastructure/Language'
import {PollVariation}          from '../poll/variation/PollVariation'
import {Actor}                  from '../user/Actor'
import {VoteVariation}          from '../vote/VoteVariation'
import {PollOpinionResponse}    from './PollOpinionResponse'
import {PollOpinionTranslation} from './PollOpinionTranslation'
import {PollOpinionRating}      from './user/PollOpinionRating'

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

	@ManyToOne()
	@JoinColumn({name: 'VOTE_VARIATION_ID', nullable: false})
	voteVariation: VoteVariation

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID', nullable: false})
	pollVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollOpinion'})
	ratings: PollOpinionRating[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollOpinion'})
	childResponses: PollOpinionResponse[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollOpinion'})
	translations: PollOpinionTranslation[]

}
