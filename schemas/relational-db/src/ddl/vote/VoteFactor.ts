import {
	Column,
	DbString,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                    from '@airport/air-control'
import {
	VoteFactor_Id,
	VoteFactor_Share
}                                    from '../../types/vote/VoteFactor'
import {PollFactorPositionVariation} from '../poll/variation/structure/PollFactorPositionVariation'
import {VoteFactorType}              from './VoteFactorType'
import {VoteVariation}               from './VoteVariation'

@Entity()
@Table({name: 'VOTE_FACTORS'})
export class VoteFactor {

	@GeneratedValue()
	@Id()
	@Column({name: 'VOTE_FACTOR_ID'})
	id: VoteFactor_Id

	@ManyToOne()
	@JoinColumn({name: 'VOTE_VARIATION_ID', nullable: false})
	voteVariation: VoteVariation

	@Column({name: 'SHARE', nullable: false})
	@DbString()
	share: VoteFactor_Share

	@ManyToOne()
	@JoinColumn({name: 'POLL_FACTOR_POSITION_VARIATION_ID', nullable: false})
	pollFactorPos: PollFactorPositionVariation

	@ManyToOne()
	@JoinColumn({name: 'VOTE_FACTOR_TYPE_ID', nullable: false})
	type: VoteFactorType

}
