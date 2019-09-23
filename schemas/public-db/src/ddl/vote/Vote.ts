import {
	Column,
	DbNumber,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                            from '@airport/air-control'
import {CascadeType}         from '@airport/ground-control'
import {ImmutableActorRow}   from '../infrastructure/ImmutableActorRow'
import {Poll}                from '../poll/Poll'
import {Actor}               from '../user/Actor'
import {ChosenVoteVariation} from './ChosenVoteVariation'
import {VoteType}            from './VoteType'
import {VoteVariation}       from './VoteVariation'

export type Vote_Id = number


@Entity()
@Table({name: 'VOTES'})
export class Vote
	extends ImmutableActorRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'VOTE_ID'})
	id: Vote_Id

	@ManyToOne()
	@JoinColumn({name: 'ACTOR_ID', nullable: false})
	actor: Actor

	/**
	 * Reserved for future use - let people not the the target group vote too (
	 * since they can see the poll) but track it differently
	 */
	@Column({name: 'VOTE_TYPE_ID'})
	@DbNumber()
	type: VoteType

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'vote'})
	chosenVariations: ChosenVoteVariation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'vote'})
	variations: VoteVariation[]

}
