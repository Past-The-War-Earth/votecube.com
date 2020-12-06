import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                          from '@airport/air-control'
import {VoteVersion_Id}    from '../../types/vote/VoteVersion'
import {ImmutableActorRow} from '../infrastructure/row/ImmutableActorRow'
import {Vote}              from './Vote'
import {VoteFactor}        from './VoteFactor'

@Entity()
@Table({name: 'VOTE_VERSIONS'})
export class VoteVersion
	extends ImmutableActorRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'VOTE_VERSION_ID'})
	id: VoteVersion_Id

	@ManyToOne()
	@JoinColumn({name: 'VOTE_ID', nullable: false})
	vote: Vote

	@OneToMany({mappedBy: 'voteRevision'})
	factors: VoteFactor[]

}
