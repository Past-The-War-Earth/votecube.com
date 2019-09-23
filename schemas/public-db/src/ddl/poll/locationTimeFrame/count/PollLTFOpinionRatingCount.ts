import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-control'
import {Rating}                from '../../../infrastructure/rating/Rating'
import {SystemGeneratedRow}    from '../../../infrastructure/SystemGeneratedRow'
import {PollLocationTimeFrame} from '../PollLocationTimeFrame'

export type PollLTFOpinionRatingCount_Id = number
export type PollLTFOpinionRatingCount_Count = number

/**
 * Count of all opinion ratings (including reversals).
 */
@Entity()
@Table({name: 'POLL_LTF_OPINION_RATING_COUNTS'})
export class PollLTFOpinionRatingCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_LTF_OPINION_RATING_COUNT_ID'})
	id: PollLTFOpinionRatingCount_Id

	@Column({name: 'COUNT'})
	count: PollLTFOpinionRatingCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_LOCATION_TIME_FRAME_ID'})
	locationTimeFrame: PollLocationTimeFrame

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
