import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                          from '@airport/air-control'
import {CascadeType}       from '@airport/ground-control'
import {
	LabelTranslationRating_Id,
	LabelTranslationRating_IsCurrent
}                          from '../../../../types/poll/revision/label/LabelTranslationRating'
import {Rating}            from '../../../infrastructure/rating/Rating'
import {ImmutableActorRow} from '../../../infrastructure/row/ImmutableActorRow'
import {LabelTranslation}  from './LabelTranslation'

/**
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
@Entity()
@Table({name: 'LABEL_TRANSLATION_RATINGS'})
export class LabelTranslationRating
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'LABEL_TRANSLATION_RATING_ID'})
	id: LabelTranslationRating_Id

	@Column({name: 'LABEL_TRANSLATION_RATING_IS_CURRENT'})
	isCurrent: LabelTranslationRating_IsCurrent

	@ManyToOne()
	@JoinColumn({name: 'LABEL_TRANSLATION_ID'})
	labelTranslation: LabelTranslation

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_LABEL_TRANSLATION_RATING_ID',
		referencedColumnName: 'LABEL_TRANSLATION_RATING_ID'
	})
	parent: LabelTranslationRating

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	child: LabelTranslationRating[]

}
