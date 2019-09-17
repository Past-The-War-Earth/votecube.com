import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                       from '@airport/air-control'
import {CascadeType}                    from '@airport/ground-control'
import {ImmutableRow}                   from '../ImmutableRow'
import {Language}                       from '../Language'
import {Poll}                           from '../poll/Poll'
import {Actor}                          from '../user/Actor'
import {Vote}                           from '../vote/Vote'
import {VoteVariation}                  from '../vote/VoteVariation'
import {PollOpinion}                    from './PollOpinion'
import {PollOpinionResponseTranslation} from './PollOpinionResponseTranslation'

export type PollOpinionResponse_Id = number
export type PollOpinionResponse_Title = string
export type PollOpinionResponse_Text = string

/**
 * This the computed translation (based on most pinned factor variation).
 *
 */
@Entity()
@Table({name: 'POLL_OPINION_RESPONSES'})
export class PollOpinionResponse
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_OPINION_RESPONSE_ID'})
	id: PollOpinionResponse_Id

	@Column({name: 'POLL_OPINION_RESPONSE_TITLE', nullable: false})
	name: PollOpinionResponse_Title

	@Column({name: 'POLL_OPINION_RESPONSE_TEXT', nullable: false})
	description: PollOpinionResponse_Text

	@ManyToOne()
	@JoinColumn({name: 'POLL_OPINION_ID', nullable: false})
	pollOpinion: PollOpinion

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_OPINION_RESPONSE_ID',
		nullable: false,
		referencedColumnName: 'POLL_OPINION_RESPONSE_ID'
	})
	parentResponse: PollOpinionResponse

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'ACTOR_ID', nullable: false})
	actor: Actor

	@ManyToOne()
	@JoinColumn({name: 'VOTE_ID', nullable: false})
	vote: Vote

	@ManyToOne()
	@JoinColumn({name: 'VOTE_VARIATION_ID', nullable: false})
	voteVariation: VoteVariation

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parentResponse'})
	childResponses: PollOpinionResponse[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollOpinionResponse'})
	translations: PollOpinionResponseTranslation[]

}
