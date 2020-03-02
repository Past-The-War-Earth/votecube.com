import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {
	PollRevisionRatingCount_Count,
	PollRevisionRatingCount_Id
}                           from '../../../../types/poll/revision/count/PollRevisionRatingCount'
import {Rating}             from '../../../infrastructure/rating/Rating'
import {SystemGeneratedRow} from '../../../infrastructure/row/SystemGeneratedRow'
import {PollRevision}       from '../PollRevision'

/**
 * Computation of all ratings (including reversals).
 */
@Entity()
@Table({name: 'POLL_REVISION_RATING_COUNTS'})
export class PollRevisionRatingCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_REVISION_RATING_COUNT_ID'})
	id: PollRevisionRatingCount_Id

	@Column({name: 'COUNT'})
	count: PollRevisionRatingCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_ID'})
	pollRevision: PollRevision

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
