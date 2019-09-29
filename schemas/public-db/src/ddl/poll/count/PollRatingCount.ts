import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {
	PollRatingCount_Count,
	PollRatingCount_Id
} from '../../../types/poll/count/PollRatingCount'
import {Rating}             from '../../infrastructure/rating/Rating'
import {SystemGeneratedRow} from '../../infrastructure/row/SystemGeneratedRow'
import {Poll}               from '../Poll'

/**
 * Computation of all ratings (including reversals).
 */
@Entity()
@Table({name: 'POLL_RATING_COUNTS'})
export class PollRatingCount
	extends SystemGeneratedRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_RATING_COUNT_ID'})
	id: PollRatingCount_Id

	@Column({name: 'COUNT'})
	count: PollRatingCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID'})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
