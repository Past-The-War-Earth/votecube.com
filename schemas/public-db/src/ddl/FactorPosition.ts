import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                         from '@airport/air-control'
import {ImmutableRepoRow} from '@airport/holding-pattern'
import {Factor}           from './Factor'
import {Position}           from './Position'

export type FactorPosition_Id = number

@Entity()
@Table({name: 'FACTOR_POSITIONS'})
export class FactorPosition
	extends ImmutableRepoRow {

	@GeneratedValue()
	@Column({name: 'FACTOR_POSITION_ID'})
	id: FactorPosition_Id

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_ID'})
	factor: Factor

	@ManyToOne()
	@JoinColumn({name: 'POSITION_ID'})
	position: Position

}
