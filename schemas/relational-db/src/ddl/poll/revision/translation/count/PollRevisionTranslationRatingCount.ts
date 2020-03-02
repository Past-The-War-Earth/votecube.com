import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                                 from '@airport/air-control'
import {
	PollRevisionTranslationRatingCount_Count,
	PollRevisionTranslationRatingCount_Id
}                                 from '../../../../../types/poll/revision/translation/count/PollRevisionTranslationRatingCount'
import {Rating}                   from '../../../../infrastructure/rating/Rating'
import {SystemGeneratedRow}      from '../../../../infrastructure/row/SystemGeneratedRow'
import {PollRevisionTranslation} from '../PollRevisionTranslation'

/**
 * Computation of all ratings (including reversals).
 */
@Entity()
@Table({name: 'POLL_REVISION_TRANSLATION_RATING_COUNTS'})
export class PollRevisionTranslationRatingCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_REVISION_TRANSLATION_RATING_COUNT_ID'})
	id: PollRevisionTranslationRatingCount_Id

	@Column({name: 'COUNT'})
	count: PollRevisionTranslationRatingCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_TRANSLATION_ID'})
	pollRevisionTranslation: PollRevisionTranslation

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
