import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                            from '@airport/air-control'
import {
	PollOpinionCount_Count,
	PollOpinionCount_Id
} from '../../../types/poll/count/PollOpinionsCount'
import {SystemGeneratedRow}  from '../../infrastructure/row/SystemGeneratedRow'
import {Poll}                from '../Poll'

/**
 * Count of all opinions.
 */
@Entity()
@Table({name: 'POLL_OPINIONS_COUNTS'})
export class PollOpinionsCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_OPINION_COUNT_ID'})
	id: PollOpinionCount_Id

	@Column({name: 'COUNT'})
	count: PollOpinionCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID'})
	poll: Poll

}
