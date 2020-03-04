import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                   from '@airport/air-control'
import {UserPollRevisionRating_Id} from '../../../types/poll/user/UserPollRevisionRating'
import {Rating}                     from '../../infrastructure/Rating/Rating'
import {MutableActorRow}   from '../../infrastructure/row/MutableActorRow'
import {PollRevision}     from '../revision/PollRevision'
import {UserPollRevision} from './UserPollRevision'

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
@Table({name: 'USER_POLL_REVISION_RATINGS'})
export class UserPollRevisionRating
	extends MutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'USER_POLL_REVISION_RATING_ID'})
	id: UserPollRevisionRating_Id

	/*
	 * No need for is current - there should always be
	 * one record per User/PollRevision/Rating
	@Column({name: 'USER_POLL_REVISION_RATING_IS_CURRENT'})
	isCurrent: UserPollRevisionRating_IsCurrent
	 */

	@ManyToOne()
	@JoinColumn({name: 'USER_POLL_REVISION_ID'})
	userPollRevision: UserPollRevision

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

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	child: UserPollRevisionRating[]
	 */

}
