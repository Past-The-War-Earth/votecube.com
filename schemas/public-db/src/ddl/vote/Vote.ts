import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                     from '@airport/air-control'
import {CascadeType}  from '@airport/ground-control'
import {ImmutableRow} from '../ImmutableRow'
import {Poll}         from '../poll/Poll'
import {VoteFactor}   from './VoteFactor'

export type Vote_Id = number

@Entity()
@Table({name: 'VOTES'})
export class Vote
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'VOTE_ID'})
	id: Vote_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'vote'})
	factors: VoteFactor[]

}
