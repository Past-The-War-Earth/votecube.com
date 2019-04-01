import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table,
	TraditionalServerSeq
} from '@airport/air-control'
import {ImmutableRepoRow} from '@airport/holding-pattern'
import {CascadeType}      from '@airport/ground-control'
import {Factor}           from './Factor'
import {Position}         from './Position'

export type FactorPosition_Id = number

@Entity()
@Table({name: 'FACTOR_POSITIONS'})
export class FactorPosition
	extends ImmutableRepoRow {

	// @GeneratedValue()
	@TraditionalServerSeq()
	@Column({name: 'FACTOR_POSITION_ID'})
	id: FactorPosition_Id

	@ManyToOne({cascade: CascadeType.PERSIST})
	// @JoinColumn({name: 'FACTOR_ID'})
	factor: Factor

	@ManyToOne({cascade: CascadeType.PERSIST})
	// @JoinColumn({name: 'POSITION_ID'})
	position: Position

}
