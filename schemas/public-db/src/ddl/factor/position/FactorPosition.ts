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
 * This is done at Factor + Position level (vs FactorVariation & PositionVariation)
 * because the underlying relationship between Factor and Position does not change
 * with variations.
 *
 * Essentially this just says which positions belong to which factors.  Which
 * variations is determined at PollVariation level (not PollFactorPositionVariation)
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
