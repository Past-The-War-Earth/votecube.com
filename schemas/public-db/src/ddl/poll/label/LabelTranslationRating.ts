import {
	Entity,
	JoinColumn,
	ManyToOne,
	Table
}                          from '@airport/air-control'
import {ImmutableActorRow} from '../../infrastructure/ImmutableActorRow'
import {Rating}            from '../../infrastructure/Rating/Rating'
import {LabelTranslation}  from './LabelTranslation'

@Entity()
@Table({name: 'LABEL_TRANSLATION_RATINGS'})
export class LabelTranslationRating
	extends ImmutableActorRow {

	@ManyToOne()
	@JoinColumn({name: 'LABEL_TRANSLATION_ID'})
	labelTranslation: LabelTranslation

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
