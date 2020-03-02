import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                                     from '@airport/air-control'
import {
	PollRunOpinionRatingCount_Count,
	PollRunOpinionRatingCount_Id
} from '../../../../types/poll/run/count/PollRunOpinionRatingCount'
import {Rating}                       from '../../../infrastructure/rating/Rating'
import {SystemGeneratedRow} from '../../../infrastructure/row/SystemGeneratedRow'
import {PollRun}            from '../PollRun'

/**
 * Count of all opinion ratings (including reversals).
 */
@Entity()
@Table({name: 'POLL_RUN_OPINION_RATING_COUNTS'})
export class PollRunOpinionRatingCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_RUN_OPINION_RATING_COUNT_ID'})
	id: PollRunOpinionRatingCount_Id

	@Column({name: 'COUNT'})
	count: PollRunOpinionRatingCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_RUN_ID'})
	run: PollRun

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
