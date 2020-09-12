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
import {PollRevisionFactorPosition} from '../poll/revision/PollRevisionFactorPosition'
import {VoteFactorType} from './VoteFactorType'
import {VoteVersion}    from './VoteVersion'

@Entity()
@Table({name: 'VOTE_FACTORS'})
export class VoteFactor {

	@GeneratedValue()
	@Id()
	@Column({name: 'VOTE_FACTOR_ID'})
	id: VoteFactor_Id

	@ManyToOne()
	@JoinColumn({name: 'VOTE_VERSION_ID', nullable: false})
	voteRevision: VoteVersion

	@Column({name: 'SHARE', nullable: false})
	@DbString()
	share: VoteFactor_Value

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_FACTOR_POSITION_ID', nullable: false})
	pollFactorPos: PollRevisionFactorPosition

	@ManyToOne()
	@JoinColumn({name: 'VOTE_FACTOR_TYPE_ID', nullable: false})
	type: VoteFactorType

}
