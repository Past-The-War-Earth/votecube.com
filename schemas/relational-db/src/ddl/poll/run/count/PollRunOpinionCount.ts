import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                               from '@airport/air-control'
import {
	PollRunOpinionCount_Count,
	PollRunOpinionCount_Id
} from '../../../../types/poll/run/count/PollRunOpinionCount'
import {SystemGeneratedRow} from '../../../infrastructure/row/SystemGeneratedRow'
import {PollRun}            from '../PollRun'

/**
 * Count of all opinions.
 */
@Entity()
@Table({name: 'POLL_RUN_OPINION_COUNTS'})
export class PollRunOpinionCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_RUN_OPINION_COUNT_ID'})
	id: PollRunOpinionCount_Id

	@Column({name: 'COUNT'})
	count: PollRunOpinionCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_RUN_ID'})
	run: PollRun

}
