import {
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	Table,
	TraditionalServerSeq
}                         from '@airport/air-control'
import {CascadeType}      from '@airport/ground-control'
import {ImmutableRepoRow} from '@airport/holding-pattern'
import {
	Poll,
	Poll_Id
}                         from '../poll/Poll'
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

	@Column({name: 'POLL_ID'})
	pollId: Poll_Id

	@ManyToOne()
		// @JoinColumn({name: 'POLL_ID', nullable: false})
		poll: Poll

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'vote'})
	factors: VoteFactor[]

}
