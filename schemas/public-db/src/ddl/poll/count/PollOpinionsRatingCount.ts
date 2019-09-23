import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {Rating}             from '../../infrastructure/rating/Rating'
import {SystemGeneratedRow} from '../../infrastructure/SystemGeneratedRow'
import {Poll}      from '../Poll'

export type PollOpinionsRatingCount_Id = number
export type PollOpinionsRatingCount_Count = number

/**
 * Count of all opinion ratings (including reversals).
 */
@Entity()
@Table({name: 'POLL_OPINIONS_RATING_COUNTS'})
export class PollOpinionsRatingCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_OPINION_RATING_COUNT_ID'})
	id: PollOpinionsRatingCount_Id

	@Column({name: 'COUNT'})
	count: PollOpinionsRatingCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID'})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
