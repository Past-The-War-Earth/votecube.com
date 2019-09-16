import {
	Column,
	DbNumber,
	DbString,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                       from '@airport/air-control'
import {Poll}           from '../../..'
import {FactorPosition} from './FactorPosition'

export type PollFactorPosition_Axis = 'x' | 'y' | 'z'
export type PollFactorPosition_Dir = -1 | 1
export type PollFactorPosition_Id = number

@Entity()
@Table({name: 'POLL_FACTOR_POSITIONS'})
export class PollFactorPosition {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_FACTOR_POSITION_ID'})
	id: PollFactorPosition_Id

	@Column({name: 'FACTOR_COORDINATE_AXIS', nullable: false})
	@DbString()
	axis: PollFactorPosition_Axis

	@Column({name: 'POSITION_ORIENTATION', nullable: false})
	@DbNumber()
	dir: PollFactorPosition_Dir

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_POSITION_ID', nullable: false})
	factorPosition: FactorPosition

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

}
