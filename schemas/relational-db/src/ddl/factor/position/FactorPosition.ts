import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                          from '@airport/air-control'
import {FactorPosition_Id} from '../../../types/factor/position/FactorPosition'
import {ImmutableActorRow} from '../../infrastructure/row/ImmutableActorRow'
import {Factor}            from '../Factor'
import {Position}          from './Position'

/**
 * Which positions belong to which factors.
 */
@Entity()
@Table({name: 'FACTOR_POSITIONS'})
export class FactorPosition
	extends ImmutableActorRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'FACTOR_POSITION_ID'})
	id: FactorPosition_Id

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_ID'})
	factor: Factor

	@ManyToOne()
	@JoinColumn({name: 'POSITION_ID'})
	position: Position

}
