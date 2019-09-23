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

export type PollLTFRatingCount_Id = number
export type PollLTFRatingCount_Count = number

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
