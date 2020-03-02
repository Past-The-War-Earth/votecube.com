import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                              from '@airport/air-control'
import {CascadeType}           from '@airport/ground-control'
import {PollFactorRevision_Id} from '../../../../types/poll/revision/structure/PollFactorRevision'
import {Factor}                from '../../../factor/Factor'
import {ImmutableRow}          from '../../../infrastructure/row/ImmutableRow'
import {PollRevision}          from '../PollRevision'

@Entity()
@Table({name: 'POLL_FACTOR_REVISIONS'})
export class PollFactorRevision
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_FACTOR_REVISION_ID'})
	id: PollFactorRevision_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_ID'})
	pollRevision: PollRevision

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_ID', nullable: false})
	factor: Factor

	/**
	 * This is done at poll specific level to record the relationship between
	 * the polls, via which the Factor evolved.
	 */
	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_FACTOR_REVISION_ID',
		referencedColumnName: 'POLL_FACTOR_REVISION_ID'
	})
	parent: PollFactorRevision

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PollFactorRevision[]

}
