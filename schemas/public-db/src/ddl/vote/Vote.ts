import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table,
	TraditionalServerSeq
} from '@airport/air-control'
import {ImmutableRepoRow} from '@airport/holding-pattern'
import {CascadeType}      from '@airport/ground-control'
import {Poll}             from '../poll/Poll'
import {VoteFactor}       from './VoteFactor'

export type Vote_Id = number

@Entity()
@Table({name: 'VOTES'})
export class Vote
	extends ImmutableRepoRow {

	// @GeneratedValue()
	@TraditionalServerSeq()
	@Column({name: 'VOTE_ID'})
	id: Vote_Id

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'vote'})
	factors: VoteFactor[]

	@ManyToOne()
	// @JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

}
