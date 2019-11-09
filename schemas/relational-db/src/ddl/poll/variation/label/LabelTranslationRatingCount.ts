import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {
	LabelTranslationRatingCount_Count,
	LabelTranslationRatingCount_Id
}                           from '../../../../types/poll/variation/label/LabelTranslationRatingCount'
import {Rating}             from '../../../infrastructure/rating/Rating'
import {SystemGeneratedRow} from '../../../infrastructure/row/SystemGeneratedRow'
import {LabelTranslation}   from './LabelTranslation'

/**
 * Computation of all ratings (including reversals).
 */
@Entity()
@Table({name: 'LABEL_TRANSLATION_RATING_COUNTS'})
export class LabelTranslationRatingCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'LABEL_TRANSLATION_RATING_COUNT_ID'})
	id: LabelTranslationRatingCount_Id

	@Column({name: 'COUNT'})
	count: LabelTranslationRatingCount_Count

	@ManyToOne()
	@JoinColumn({name: 'LABEL_TRANSLATION_ID'})
	labelTranslation: LabelTranslation

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
