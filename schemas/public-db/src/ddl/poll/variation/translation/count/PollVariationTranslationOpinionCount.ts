import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                                 from '@airport/air-control'
import {
	PollVariationTranslationOpinionCount_Count,
	PollVariationTranslationOpinionCount_Id
}                                 from '../../../../../types/poll/variation/translation/count/PollVariationTranslationOpinionCount'
import {SystemGeneratedRow}       from '../../../../infrastructure/row/SystemGeneratedRow'
import {PollVariationTranslation} from '../PollVariationTranslation'

/**
 * Count of all opinions.
 */
@Entity()
@Table({name: 'POLL_VARIATION_TRANSLATION_OPINION_COUNTS'})
export class PollVariationTranslationOpinionCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_VARIATION_TRANSLATION_OPINION_COUNT_ID'})
	id: PollVariationTranslationOpinionCount_Id

	@Column({name: 'COUNT'})
	count: PollVariationTranslationOpinionCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_TRANSLATION_ID'})
	pollVariationTranslation: PollVariationTranslation

}
