import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                                     from '@airport/air-control'
import {
	PollLTFOpinionRatingCount_Count,
	PollLTFOpinionRatingCount_Id
} from '../../../../types/poll/locationTimeFrame/count/PollLTFOpinionRatingCount'
import {Rating}                       from '../../../infrastructure/rating/Rating'
import {SystemGeneratedRow}           from '../../../infrastructure/row/SystemGeneratedRow'
import {PollLocationTimeFrame}        from '../PollLocationTimeFrame'

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
