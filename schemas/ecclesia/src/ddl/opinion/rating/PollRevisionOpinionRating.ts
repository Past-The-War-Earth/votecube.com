import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                     from '@airport/air-traffic-control'
import {PollRevisionOpinionRating_Id} from '../../../types/opinion/rating/PollRevisionOpinionRating'
import {Rating}                       from '../../infrastructure/rating/Rating'
import {ImmutableActorRow}            from '../../infrastructure/row/ImmutableActorRow'
import {PollRevisionOpinion}          from '../PollRevisionOpinion'

/**
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
@Entity()
@Table({name: 'POLL_REVISION_OPINION_RATINGS'})
export class PollRevisionOpinionRating
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_REVISION_OPINION_RATING_ID'})
	id: PollRevisionOpinionRating_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_OPINION_ID'})
	pollRevisionOpinion: PollRevisionOpinion

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
