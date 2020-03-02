import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {
	PollRevisionOpinionRatingCount_Count,
	PollRevisionOpinionRatingCount_Id
}                           from '../../../../types/poll/revision/count/PollRevisionOpinionRatingCount'
import {Rating}             from '../../../infrastructure/rating/Rating'
import {SystemGeneratedRow} from '../../../infrastructure/row/SystemGeneratedRow'
import {PollRevision}       from '../PollRevision'

/**
 * Count of all opinion ratings (including reversals).
 */
@Entity()
@Table({name: 'POLL_REVISION_OPINION_RATING_COUNTS'})
export class PollRevisionOpinionRatingCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_REVISION_OPINION_RATING_COUNT_ID'})
	id: PollRevisionOpinionRatingCount_Id

	@Column({name: 'COUNT'})
	count: PollRevisionOpinionRatingCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_ID'})
	pollRevision: PollRevision

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
