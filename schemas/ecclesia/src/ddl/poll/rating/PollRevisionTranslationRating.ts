import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                          from '@airport/air-traffic-control'
import {
	PollRevisionTranslationRating_Id,
	PollRevisionTranslationRating_Value
}                          from '../../../types/poll/rating/PollRevisionTranslationRating'
import {Rating}            from '../../infrastructure/Rating/Rating'
import {ImmutableActorRow} from '../../infrastructure/row/ImmutableActorRow'
import {PollRun}           from '../run/PollRun'

/**
 * User ratings for a particular Poll Revision Translation.
 *
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
@Entity()
@Table({name: 'POLL_REVISION_TRANSLATION_RATINGS'})
export class PollRevisionTranslationRating
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_REVISION_TRANSLATION_RATING_ID'})
	id: PollRevisionTranslationRating_Id

	// @Column({name: 'IS_CURRENT'})
	// isCurrent: PollRevisionTranslationRating_IsCurrent

	@Column({name: 'VALUE'})
	value: PollRevisionTranslationRating_Value

	// NOTE: optional
	@ManyToOne()
	@JoinColumn({name: 'POLL_RUN_ID'})
	run: PollRun

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_REVISION_TRANSLATION_RATING_ID',
		referencedColumnName: 'POLL_REVISION_TRANSLATION_RATING_ID'
	})
	parent: PollRevisionTranslationRating

	@OneToMany({mappedBy: 'parent'})
	child: PollRevisionTranslationRating[]

}
