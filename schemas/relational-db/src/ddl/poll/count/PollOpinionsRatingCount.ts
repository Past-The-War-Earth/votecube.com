import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {
	PollOpinionsRatingCount_Count,
	PollOpinionsRatingCount_Id
}                           from '../../../types/poll/count/PollOpinionsRatingCount'
import {Rating}             from '../../infrastructure/rating/Rating'
import {SystemGeneratedRow} from '../../infrastructure/row/SystemGeneratedRow'
import {Poll}               from '../Poll'

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
