import {
	Column,
	DbNumber,
	DbString,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                       from '@airport/air-control'
import {ChildRepoRow}   from '@airport/holding-pattern'
import {CascadeType}    from '../../../../../../airport/apis/ground-control/lib'
import {FactorPosition} from '../FactorPosition'
import {Poll}           from './Poll'

export type PollFactorPosition_Axis = 'x' | 'y' | 'z'
export type PollFactorPosition_ColorId = number
export type PollFactorPosition_Dir = -1 | 1
export type PollFactorPosition_Id = number

@Entity()
@Table({name: 'POLL_FACTOR_POSITIONS'})
export class PollFactorPosition
	extends ChildRepoRow {

	@GeneratedValue()
	@Column({name: 'POLL_FACTOR_POSITION_ID'})
	id: PollFactorPosition_Id

	@Column({name: 'FACTOR_COORDINATE_AXIS', nullable: false})
	@DbString()
	axis: PollFactorPosition_Axis

	@Column({name: 'COLOR_ID', nullable: false})
	color: PollFactorPosition_ColorId

	@Column({name: 'POSITION_ORIENTATION', nullable: false})
	@DbNumber()
	dir: PollFactorPosition_Dir

	@ManyToOne({cascade: CascadeType.PERSIST})
	@JoinColumn({name: 'FACTOR_POSITION_ID', nullable: false})
	factorPosition: FactorPosition

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

}
