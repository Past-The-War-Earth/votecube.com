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
import {SelectPollVariation} from '../poll/variation/SelectPollVariation'
import {Actor}               from '../user/Actor'
import {SelectVoteVariation} from './SelectVoteVariation'

export type Vote_Id = number

export enum VoteType {
	ELIGIBLE,
}

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
	 * Reserved for future use - let people on the the target group vote too (
	 * since they can see the poll) but track it differently
	 */
	@Column({name: 'VOTE_TYPE'})
	@DbNumber()
	type: VoteType

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	selectVariations: SelectVoteVariation[]

	/*
		@ManyToOne()
		@JoinColumn({name: 'POLL_VARIATION_ID', nullable: false})
		variation: PollVariation
		*/

}
