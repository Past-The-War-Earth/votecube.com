import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                from '@airport/air-control'
import {CascadeType}             from '@airport/ground-control'
import {PollPositionRevision_Id} from '../../../../types/poll/revision/structure/PollPositionRevision'
import {Position}                from '../../../factor/position/Position'
import {ImmutableRow}            from '../../../infrastructure/row/ImmutableRow'
import {PollRevision}            from '../PollRevision'

@Entity()
@Table({name: 'POLL_POSITION_REVISIONS'})
export class PollPositionRevision
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_POSITION_REVISION_ID'})
	id: PollPositionRevision_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_ID'})
	pollRevision: PollRevision

	@ManyToOne()
	@JoinColumn({name: 'POSITION_ID', nullable: false})
	position: Position

	/**
	 * This is done at poll specific level to record the relationship between
	 * the polls, via which the Position evolved.
	 */
	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_POSITION_REVISION_ID',
		referencedColumnName: 'POLL_POSITION_REVISION_ID'
	})
	parent: PollPositionRevision

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PollPositionRevision[]
}
