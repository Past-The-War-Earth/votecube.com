import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {SystemGeneratedRow} from '../../infrastructure/SystemGeneratedRow'
import {Poll}               from '../Poll'

export type PollOpinionCount_Id = number
export type PollOpinionCount_Count = number

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
