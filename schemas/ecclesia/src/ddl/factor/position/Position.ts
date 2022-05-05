import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
} from '@airport/air-traffic-control'
import {
	Position_Id,
	Position_Name
} from '../../../types/factor/position/Position'
import { AgeSuitableRow } from '../../infrastructure/row/AgeSuitableRow'
import { PollRevision } from '../../poll/revision/PollRevision'
import { FactorPosition } from './FactorPosition'
import { PositionTranslation } from './PositionTranslation'

/**
 * This is the generic position records (not related to any poll).
 */
@Entity()
@Table({ name: 'POSITIONS' })
export class Position
	extends AgeSuitableRow {

	@GeneratedValue()
	@Id()
	@Column({ name: 'POSITION_ID' })
	id: Position_Id

	@ManyToOne()
	@JoinColumn({ name: 'POLL_REVISION_ID' })
	createdAtPollRevision: PollRevision

	@Column({ name: 'POSITION_NAME' })
	name: Position_Name

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POSITION_ID',
		referencedColumnName: 'POSITION_ID'
	})
	parent: Position

	@OneToMany({ mappedBy: 'parent' })
	children: Position[]

	@OneToMany({ mappedBy: 'position' })
	factorPositions: FactorPosition[]

	@OneToMany({ mappedBy: 'position' })
	translations: PositionTranslation[]

}
