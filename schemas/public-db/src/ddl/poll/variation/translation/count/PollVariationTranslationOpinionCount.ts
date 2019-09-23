import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                                 from '@airport/air-control'
import {SystemGeneratedRow}       from '../../../../infrastructure/SystemGeneratedRow'
import {PollVariationTranslation} from '../PollVariationTranslation'

export type PollVariationTranslationOpinionCount_Id = number
export type PollVariationTranslationOpinionCount_Count = number

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
