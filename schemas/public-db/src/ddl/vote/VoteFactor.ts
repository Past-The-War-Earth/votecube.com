import {
	Column,
	DbString,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table,
	TraditionalServerSeq
} from '@airport/air-control'
import {ChildRepoRow}       from '@airport/holding-pattern'
import {PositionPercent}    from '@votecube/cube-logic'
import {PollFactorPosition} from '../poll/PollFactorPosition'
import {Vote}               from './Vote'

export type VoteFactor_Id = number
export type VoteFactor_Share = PositionPercent
export type VoteFactor_Type = 'x' | 'y' | 'z'

@Entity()
@Table({name: 'VOTE_FACTORS'})
export class VoteFactor
	extends ChildRepoRow {

	// @GeneratedValue()
	@TraditionalServerSeq()
	@Column({name: 'VOTE_FACTOR_ID'})
	id: VoteFactor_Id

	@ManyToOne()
	// @JoinColumn({name: 'VOTE_ID', nullable: false})
	vote: Vote

	@Column({name: 'SHARE', nullable: false})
	@DbString()
	share: VoteFactor_Share

	@ManyToOne()
	// @JoinColumn({name: 'POLL_FACTOR_POSITION_ID', nullable: false})
	pollFactorPos: PollFactorPosition

	@Column({name: 'TYPE', nullable: false})
	@DbString()
	type: VoteFactor_Type

}
