import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
} from '@airport/air-traffic-control'
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow'
import { Factor } from '../Factor'
import { Position } from './Position'

/**
 * Which positions belong to which factors.
 */

export type FactorPosition_Id = number

@Entity()
@Table({ name: 'FACTOR_POSITIONS' })
export class FactorPosition
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({ name: 'FACTOR_POSITION_ID' })
	id: FactorPosition_Id

	@ManyToOne()
	@JoinColumn({ name: 'FACTOR_ID' })
	factor: Factor

	@ManyToOne()
	@JoinColumn({ name: 'POSITION_ID' })
	position: Position

}
