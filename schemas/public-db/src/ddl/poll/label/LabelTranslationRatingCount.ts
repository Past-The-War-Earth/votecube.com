import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {Rating}             from '../../infrastructure/Rating/Rating'
import {SystemGeneratedRow} from '../../infrastructure/SystemGeneratedRow'
import {LabelTranslation}   from './LabelTranslation'

export type LabelTranslationRatingCount_Id = number
export type LabelTranslationRatingCount_Count = number

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
