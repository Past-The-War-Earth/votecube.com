import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                   from '@airport/air-control'
import {CascadeType}                from '@airport/ground-control'
import {
	PollRevisionOpinionRating_Id,
	PollRevisionOpinionRating_IsCurrent
}                                   from '../../../types/opinion/user/PollRevisionOpinionVersionRating'
import {Rating}                     from '../../infrastructure/rating/Rating'
import {ImmutableActorRow}          from '../../infrastructure/row/ImmutableActorRow'
import {PollRevisionOpinionVersion} from '../PollRevisionOpinionVersion'

/**
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
@Entity()
@Table({name: 'POLL_REVISION_OPINION_VERSION_RATINGS'})
export class PollRevisionOpinionVersionRating
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_REVISION_OPINION_VERSION_RATING_ID'})
	id: PollRevisionOpinionRating_Id

	@Column({name: 'IS_CURRENT'})
	isCurrent: PollRevisionOpinionRating_IsCurrent

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_OPINION_VERSION_ID'})
	pollRevisionOpinionVersion: PollRevisionOpinionVersion

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_REVISION_OPINION_VERSION_RATING_ID',
		referencedColumnName: 'POLL_REVISION_OPINION_VERSION_RATING_ID'
	})
	parent: PollRevisionOpinionVersionRating

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	child: PollRevisionOpinionVersionRating[]

}
