import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                      from '@airport/air-control'
import {CascadeType}   from '@airport/ground-control'
import {ImmutableRow}  from '../ImmutableRow'
import {PollVariation} from '../poll/PollVariation'
import {VoteFactor}    from './VoteFactor'

export type VoteVariation_Id = number

@Entity()
@Table({name: 'VOTE_VARIATIONS'})
export class VoteVariation
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'VOTE_VARIATION_ID'})
	id: VoteVariation_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID', nullable: false})
	variation: PollVariation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'voteVariation'})
	factors: VoteFactor[]

}
