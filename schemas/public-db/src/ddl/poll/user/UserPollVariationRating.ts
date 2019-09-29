import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                   from '@airport/air-control'
import {UserPollVariationRating_Id} from '../../../types/poll/user/UserPollVariationRating'
import {Rating}                     from '../../infrastructure/Rating/Rating'
import {MutableActorRow}            from '../../infrastructure/row/MutableActorRow'
import {PollVariation}              from '../variation/PollVariation'
import {UserPollVariation}          from './UserPollVariation'

// export type UserPollVariationRating_IsCurrent = boolean

/**
 * User ratings for a particular Poll Variation (likely computed from
 * UserPollVariationTranslationRating).
 *
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
@Entity()
@Table({name: 'USER_POLL_VARIATION_RATINGS'})
export class UserPollVariationRating
	extends MutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'USER_POLL_VARIATION_RATING_ID'})
	id: UserPollVariationRating_Id

	/*
	 * No need for is current - there should always be
	 * one record per User/PollVariation/Rating
	@Column({name: 'USER_POLL_VARIATION_RATING_IS_CURRENT'})
	isCurrent: UserPollVariationRating_IsCurrent
	 */

	@ManyToOne()
	@JoinColumn({name: 'USER_POLL_VARIATION_ID'})
	userPollVariation: UserPollVariation

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pollVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

	/*
	* There is only one record per User/PollVariation/Rating at this level
	* inheritance is present at Translation level
	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_USER_POLL_VARIATION_RATING_ID',
		referencedColumnName: 'USER_POLL_VARIATION_RATING_ID'
	})
	parent: UserPollVariationRating

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	child: UserPollVariationRating[]
	 */

}
