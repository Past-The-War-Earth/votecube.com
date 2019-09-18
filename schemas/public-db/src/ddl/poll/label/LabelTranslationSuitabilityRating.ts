import {
	Entity,
	JoinColumn,
	ManyToOne,
	Table
}                          from '@airport/air-control'
import {Rating} from '../../infrastructure/Rating/Rating'
import {LabelTranslation}  from './LabelTranslation'

@Entity()
@Table({name: 'LABEL_TRANSLATION_RATINGS'})
export class LabelTranslationRating {

	@ManyToOne()
	@JoinColumn({name: 'LABEL_TRANSLATION_ID'})
	labelTranslation: LabelTranslation

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	Rating: Rating

}
