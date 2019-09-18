import {
	Entity,
	JoinColumn,
	ManyToOne,
	Table
}                                 from '@airport/air-control'
import {SuitabilityRating}        from '../../infrastructure/SuitabilityRating'
import {LabelTranslation} from './LabelTranslation'

@Entity()
@Table({name: 'LABEL_TRANSLATION_SUITABILITY_RATINGS'})
export class LabelTranslationSuitabilityRating {

	@ManyToOne()
	@JoinColumn({name: 'LABEL_TRANSLATION_ID'})
	labelTranslation: LabelTranslation

	@ManyToOne()
	@JoinColumn({name: 'SUITABILITY_RATING_ID'})
	suitabilityRating: SuitabilityRating

}
