import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-control'
import {SystemGeneratedRow}    from '../../../infrastructure/SystemGeneratedRow'
import {PollLocationTimeFrame} from '../PollLocationTimeFrame'

export type PollLTFOpinionCount_Id = number
export type PollLTFOpinionCount_Count = number

/**
 * Count of all opinions.
 */
@Entity()
@Table({name: 'POLL_LTF_OPINION_COUNTS'})
export class PollLTFOpinionCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_LTF_OPINION_COUNT_ID'})
	id: PollLTFOpinionCount_Id

	@Column({name: 'COUNT'})
	count: PollLTFOpinionCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_LOCATION_TIME_FRAME_ID'})
	locationTimeFrame: PollLocationTimeFrame

}
