import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-control'
import {
	PollLTFRatingCount_Count,
	PollLTFRatingCount_Id
} from '../../../../types/poll/locationTimeFrame/count/PollLTFRatingCount'
import {Rating}                from '../../../infrastructure/rating/Rating'
import {SystemGeneratedRow}    from '../../../infrastructure/row/SystemGeneratedRow'
import {PollLocationTimeFrame} from '../PollLocationTimeFrame'

/**
 * Computation of all ratings (including reversals).
 */
@Entity()
@Table({name: 'POLL_LTF_RATING_COUNTS'})
export class PollLTFRatingCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_LTF_RATING_COUNT_ID'})
	id: PollLTFRatingCount_Id

	@Column({name: 'COUNT'})
	count: PollLTFRatingCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_LOCATION_TIME_FRAME_ID'})
	locationTimeFrame: PollLocationTimeFrame

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
