import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                                 from '@airport/air-control'
import {
	PollRevisionTranslationOpinionRatingCount_Count,
	PollRevisionTranslationOpinionRatingCount_Id
}                                 from '../../../../../types/poll/revision/translation/count/PollRevisionTranslationOpinionRatingCount'
import {Rating}                   from '../../../../infrastructure/rating/Rating'
import {SystemGeneratedRow}      from '../../../../infrastructure/row/SystemGeneratedRow'
import {PollRevisionTranslation} from '../PollRevisionTranslation'

/**
 * Count of all opinion ratings (including reversals).
 */
@Entity()
@Table({name: 'POLL_REVISION_TRANSLATION_OPINION_RATING_COUNTS'})
export class PollRevisionTranslationOpinionRatingCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_REVISION_TRANSLATION_OPINION_RATING_COUNT_ID'})
	id: PollRevisionTranslationOpinionRatingCount_Id

	@Column({name: 'COUNT'})
	count: PollRevisionTranslationOpinionRatingCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_TRANSLATION_ID'})
	pollRevisionTranslation: PollRevisionTranslation

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
