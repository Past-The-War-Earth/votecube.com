import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                     from '@airport/air-control'
import {CascadeType}  from '@airport/ground-control'
import {Factor}       from './Factor'
import {ImmutableRow} from './ImmutableRow'
import {Position}     from './Position'

export type FactorPosition_Id = number

@Entity()
@Table({name: 'FACTOR_POSITIONS'})
export class FactorPosition
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'FACTOR_POSITION_ID'})
	id: FactorPosition_Id

	@ManyToOne({cascade: CascadeType.PERSIST})
	@JoinColumn({name: 'FACTOR_ID'})
	factor: Factor

	@ManyToOne({cascade: CascadeType.PERSIST})
	@JoinColumn({name: 'POSITION_ID'})
	position: Position

}
