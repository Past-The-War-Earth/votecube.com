import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                           from '@airport/air-control'
import {CascadeType}        from '@airport/ground-control'
import {
	PollOpinionRating_Id,
	PollOpinionRating_IsCurrent
}                           from '../../../types/opinion/user/PollOpinionVersionRating'
import {Rating}             from '../../infrastructure/rating/Rating'
import {ImmutableActorRow}  from '../../infrastructure/row/ImmutableActorRow'
import {PollOpinionVersion} from '../PollOpinionVersion'

/**
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
@Entity()
@Table({name: 'POLL_OPINION_VERSION_RATINGS'})
export class PollOpinionVersionRating
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_OPINION_VERSION_RATING_ID'})
	id: PollOpinionRating_Id

	@Column({name: 'POLL_OPINION_VERSION_RATING_IS_CURRENT'})
	isCurrent: PollOpinionRating_IsCurrent

	@ManyToOne()
	@JoinColumn({name: 'POLL_OPINION_VERSION_ID'})
	pollOpinionVersion: PollOpinionVersion

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_OPINION_VERSION_RATING_ID',
		referencedColumnName: 'POLL_OPINION_VERSION_RATING_ID'
	})
	parent: PollOpinionVersionRating

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	child: PollOpinionVersionRating[]

}
