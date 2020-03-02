import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-control'
import {
	PollRunRatingCount_Count,
	PollRunRatingCount_Id
} from '../../../../types/poll/run/count/PollRunRatingCount'
import {Rating}                from '../../../infrastructure/rating/Rating'
import {SystemGeneratedRow} from '../../../infrastructure/row/SystemGeneratedRow'
import {PollRun}            from '../PollRun'

/**
 * Computation of all ratings (including reversals).
 */
@Entity()
@Table({name: 'POLL_RUN_RATING_COUNTS'})
export class PollRunRatingCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_RUN_RATING_COUNT_ID'})
	id: PollRunRatingCount_Id

	@Column({name: 'COUNT'})
	count: PollRunRatingCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_RUN_ID'})
	run: PollRun

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
