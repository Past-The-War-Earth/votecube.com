import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {
	PollRevisionOpinionCount_Count,
	PollRevisionOpinionCount_Id
}                           from '../../../../types/poll/revision/count/PollRevisionOpinionCount'
import {SystemGeneratedRow} from '../../../infrastructure/row/SystemGeneratedRow'
import {PollRevision}       from '../PollRevision'

/**
 * Count of all opinions.
 */
@Entity()
@Table({name: 'POLL_REVISION_OPINION_COUNTS'})
export class PollRevisionOpinionCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_REVISION_OPINION_COUNT_ID'})
	id: PollRevisionOpinionCount_Id

	@Column({name: 'COUNT'})
	count: PollRevisionOpinionCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_ID'})
	pollRevision: PollRevision

}
