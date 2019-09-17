import {
	Column,
	DbNumber,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                      from '@airport/air-control'
import {ImmutableRow}  from '../ImmutableRow'
import {Poll}          from '../poll/Poll'
import {Actor}         from '../user/Actor'
import {VoteVariation} from './VoteVariation'

export type Vote_Id = number

export enum VoteType {
	ELIGIBLE,
}

@Entity()
@Table({name: 'VOTES'})
export class Vote
	extends ImmutableRow {

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
	@JoinColumn({name: 'VOTE_VARIATION_ID', nullable: false})
	currentVariation: VoteVariation

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

	/*
		@ManyToOne()
		@JoinColumn({name: 'POLL_VARIATION_ID', nullable: false})
		variation: PollVariation
		*/

}
