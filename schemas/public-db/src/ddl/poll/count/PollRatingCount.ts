import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {Rating}             from '../../infrastructure/rating/Rating'
import {SystemGeneratedRow} from '../../infrastructure/SystemGeneratedRow'
import {Poll}               from '../Poll'

export type PollRatingCount_Id = number
export type PollRatingCount_Count = number

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
