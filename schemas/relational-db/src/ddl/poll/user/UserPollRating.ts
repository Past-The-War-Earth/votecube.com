import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                          from '@airport/air-control'
import {UserPollRating_Id} from '../../../types/poll/user/UserPollRating'
import {Rating}            from '../../infrastructure/Rating/Rating'
import {MutableActorRow}   from '../../infrastructure/row/MutableActorRow'
import {Poll}              from '../Poll'
import {UserPoll}          from './UserPoll'

// export type UserPollRating_IsCurrent = boolean

/**
 * User ratings for a particular Poll  (likely computed from
 * UserPollRevisionRating).
 *
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
@Entity()
@Table({name: 'USER_POLL_RATINGS'})
export class UserPollRating
	extends MutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'USER_POLL_RATING_ID'})
	id: UserPollRating_Id

	/*
	 * No need for is current - there should always be
	 * one record per User/PollRevision/Rating
	@Column({name: 'USER_POLL_RATING_IS_CURRENT'})
	isCurrent: UserPollRating_IsCurrent
	 */

	@ManyToOne()
	@JoinColumn({name: 'USER_POLL_ID'})
	userPoll: UserPoll

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID'})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating


	/*
	* There is only one record per User/PollRevision/Rating at this level
	* inheritance is present at Translation level
	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_USER_POLL_RATING_ID',
		referencedColumnName: 'USER_POLL_RATING_ID'
	})
	parent: UserPollRating

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	child: UserPollRating[]
	 */

}
