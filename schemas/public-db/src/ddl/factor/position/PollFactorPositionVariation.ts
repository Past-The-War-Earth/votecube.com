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
import {ImmutableRow}   from '../../infrastructure/ImmutableRow'
import {PollVariation}  from '../../poll/variation/PollVariation'
import {FactorPosition} from './FactorPosition'

export type PollFactorPositionVariation_Id = number
export type PollFactorPositionVariation_Axis = 'x' | 'y' | 'z'
export type PollFactorPositionVariation_Dir = -1 | 1

@Entity()
@Table({name: 'POLL_FACTOR_POSITION_VARIATIONS'})
export class PollFactorPositionVariation
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_FACTOR_POSITION_VARIATION_ID'})
	id: PollFactorPositionVariation_Id

	@Column({name: 'FACTOR_COORDINATE_AXIS', nullable: false})
	@DbString()
	axis: PollFactorPositionVariation_Axis

	@Column({name: 'POSITION_ORIENTATION', nullable: false})
	@DbNumber()
	dir: PollFactorPositionVariation_Dir

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_POSITION_ID', nullable: false})
	factorPosition: FactorPosition

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pollVariation: PollVariation

	// No alike parent record - PollFactorPositions belong to the poll directly

}
