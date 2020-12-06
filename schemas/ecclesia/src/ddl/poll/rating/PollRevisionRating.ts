import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                          from '@airport/air-control'
import {ImmutableActorRow} from '../../infrastructure/row/ImmutableActorRow'
import {
	PollRevisionRating_Id,
	PollRevisionRating_Value
}                          from '../../../types/poll/rating/PollRevisionRating'
import {Rating}            from '../../infrastructure/Rating/Rating'
import {PollRevision}      from '../revision/PollRevision'

// export type UserPollRevisionRating_IsCurrent = boolean

/**
 * User ratings for a particular Poll Revision (likely computed from
 * PollRevisionTranslationRating).
 *
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
@Entity()
@Table({name: 'POLL_REVISION_RATINGS'})
export class PollRevisionRating
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_REVISION_RATING_ID'})
	id: PollRevisionRating_Id

	@Column({name: 'VALUE'})
	value: PollRevisionRating_Value

	/*
	 * No need for is current - there should always be
	 * one record per User/PollRevision/Rating
	@Column({name: 'USER_POLL_REVISION_RATING_IS_CURRENT'})
	isCurrent: UserPollRevisionRating_IsCurrent
	 */


	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_ID'})
	pollRevision: PollRevision

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

	/*
	* There is only one record per User/PollRevision/Rating at this level
	* inheritance is present at Translation level
	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_USER_POLL_REVISION_RATING_ID',
		referencedColumnName: 'USER_POLL_REVISION_RATING_ID'
	})
	parent: UserPollRevisionRating

	@OneToMany({mappedBy: 'parent'})
	child: UserPollRevisionRating[]
	 */

}
