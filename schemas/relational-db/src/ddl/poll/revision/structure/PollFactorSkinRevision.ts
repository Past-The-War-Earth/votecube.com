import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                   from '@airport/air-control'
import {CascadeType}                from '@airport/ground-control'
import {PollFactorSkinRevision_Id} from '../../../../types/poll/revision/structure/PollFactorSkinRevision'
import {FactorSkin}                 from '../../../factor/FactorSkin'
import {ImmutableRow} from '../../../infrastructure/row/ImmutableRow'
import {PollRevision} from '../PollRevision'

@Entity()
@Table({name: 'POLL_FACTOR_SKIN_REVISIONS'})
export class PollFactorSkinRevision
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_FACTOR_SKIN_REVISION_ID'})
	id: PollFactorSkinRevision_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_ID'})
	pollRevision: PollRevision

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_SKIN_ID', nullable: false})
	factorSkin: FactorSkin

	/**
	 * This is done at poll specific level to record the relationship between
	 * the polls, via which the FactorSkin evolved.
	 */
	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_FACTOR_SKIN_REVISION_ID',
		referencedColumnName: 'POLL_FACTOR_SKIN_REVISION_ID'
	})
	parent: PollFactorSkinRevision

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PollFactorSkinRevision[]

}
