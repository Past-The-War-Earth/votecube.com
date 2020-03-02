import {
	Column,
	DbString,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                   from '@airport/air-control'
import {
	VoteFactor_Id,
	VoteFactor_Value
}                                   from '../../types/vote/VoteFactor'
import {PollFactorPositionRevision} from '../poll/revision/structure/PollFactorPositionRevision'
import {VoteFactorType}             from './VoteFactorType'
import {VoteRevision}               from './VoteRevision'

@Entity()
@Table({name: 'VOTE_FACTORS'})
export class VoteFactor {

	@GeneratedValue()
	@Id()
	@Column({name: 'VOTE_FACTOR_ID'})
	id: VoteFactor_Id

	@ManyToOne()
	@JoinColumn({name: 'VOTE_REVISION_ID', nullable: false})
	voteRevision: VoteRevision

	@Column({name: 'SHARE', nullable: false})
	@DbString()
	share: VoteFactor_Value

	@ManyToOne()
	@JoinColumn({name: 'POLL_FACTOR_POSITION_REVISION_ID', nullable: false})
	pollFactorPos: PollFactorPositionRevision

	@ManyToOne()
	@JoinColumn({name: 'VOTE_FACTOR_TYPE_ID', nullable: false})
	type: VoteFactorType

}
