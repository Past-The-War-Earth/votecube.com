import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                     from '@airport/air-control'
import {CascadeType}                  from '@airport/ground-control'
import {
	UserPollVariationTranslationRating_Id,
	UserPollVariationTranslationRating_IsCurrent
}                                     from '../../../types/poll/user/UserPollVariationTranslationRating'
import {Rating}                       from '../../infrastructure/Rating/Rating'
import {ImmutableActorRow}            from '../../infrastructure/row/ImmutableActorRow'
import {PollLocationTimeFrame}        from '../locationTimeFrame/PollLocationTimeFrame'
import {PollVariationTranslation}     from '../variation/translation/PollVariationTranslation'
import {UserPollVariationTranslation} from './UserPollVariationTranslation'

/**
 * User ratings for a particular Poll Variation Translation.
 *
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
@Entity()
@Table({name: 'USER_POLL_VARIATION_TRANSLATION_RATINGS'})
export class UserPollVariationTranslationRating
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'USER_POLL_VARIATION_TRANSLATION_RATING_ID'})
	id: UserPollVariationTranslationRating_Id

	@Column({name: 'USER_POLL_VARIATION_TRANSLATION_RATING_IS_CURRENT'})
	isCurrent: UserPollVariationTranslationRating_IsCurrent

	@ManyToOne()
	@JoinColumn({name: 'USER_POLL_VARIATION_TRANSLATION_ID'})
	userPollVariationTranslation: UserPollVariationTranslation

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_TRANSLATION_ID'})
	pollVariationTranslation: PollVariationTranslation

	@ManyToOne()
	@JoinColumn({name: 'POLL_LOCATION_TIME_FRAME_ID'})
	locationTimeFrame: PollLocationTimeFrame

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_USER_POLL_VARIATION_TRANSLATION_RATING_ID',
		referencedColumnName: 'USER_POLL_VARIATION_TRANSLATION_RATING_ID'
	})
	parent: UserPollVariationTranslationRating

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	child: UserPollVariationTranslationRating[]

}
