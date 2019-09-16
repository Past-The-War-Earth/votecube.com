import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                      from '@airport/air-control'
import {ImmutableRow}  from '../ImmutableRow'
import {Poll}          from '../poll/Poll'
import {VoteVariation} from './VoteVariation'

export type Vote_Id = number
export type Vote_Current = boolean

@Entity()
@Table({name: 'VOTES'})
export class Vote
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'VOTE_ID'})
	id: Vote_Id

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
