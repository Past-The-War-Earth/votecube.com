import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                          from '@airport/air-control'
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

	@Id()
	@ManyToOne()
	@JoinColumn({name: 'FACTOR_ID'})
	factor: Factor

	@Id()
	@ManyToOne()
	@JoinColumn({name: 'POSITION_ID'})
	position: Position

}
