import {
	Column,
	DbNumber,
	DbString,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                       from '@airport/air-control'
import {CascadeType}    from '@airport/ground-control'
import {
	PollRevisionFactorPosition_Axis,
	PollRevisionFactorPosition_Dir,
	PollRevisionFactorPosition_Id
}                       from '../../../types/poll/revision/PollRevisionFactorPosition'
import {FactorPosition} from '../../factor/position/FactorPosition'
import {ImmutableRow}   from '../../infrastructure/row/ImmutableRow'
import {PollRevision}   from './PollRevision'

@Entity()
@Table({name: 'POLL_REVISION_FACTOR_POSITIONS'})
export class PollRevisionFactorPosition
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_REVISION_FACTOR_POSITION_ID'})
	id: PollRevisionFactorPosition_Id

	@Column({name: 'FACTOR_COORDINATE_AXIS', nullable: false})
	@DbString()
	axis: PollRevisionFactorPosition_Axis

	@Column({name: 'POSITION_ORIENTATION', nullable: false})
	@DbNumber()
	dir: PollRevisionFactorPosition_Dir

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_ID'})
	pollRevision: PollRevision

	/**
	 * This is done at Factor + Position level (vs FactorRevision & PositionRevision)
	 * because the underlying relationship between Factor and Position does not change
	 * with revisions.
	 *
	 * Essentially this just says which positions belong to which factors.  Which
	 * revisions is determined at PollRevision level (not PollFactorPositionRevision)
	 */
	@ManyToOne()
	@JoinColumn({name: 'FACTOR_POSITION_ID', nullable: false})
	factorPosition: FactorPosition

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_REVISION_FACTOR_POSITION_ID',
		referencedColumnName: 'POLL_REVISION_FACTOR_POSITION_ID'
	})
	parent: PollRevisionFactorPosition

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PollRevisionFactorPosition[]
}
