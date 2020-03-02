import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                                 from '@airport/air-control'
import {
	PollRevisionTranslationOpinionCount_Count,
	PollRevisionTranslationOpinionCount_Id
}                                 from '../../../../../types/poll/revision/translation/count/PollRevisionTranslationOpinionCount'
import {SystemGeneratedRow}      from '../../../../infrastructure/row/SystemGeneratedRow'
import {PollRevisionTranslation} from '../PollRevisionTranslation'

/**
 * Count of all opinions.
 */
@Entity()
@Table({name: 'POLL_REVISION_TRANSLATION_OPINION_COUNTS'})
export class PollRevisionTranslationOpinionCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_REVISION_TRANSLATION_OPINION_COUNT_ID'})
	id: PollRevisionTranslationOpinionCount_Id

	@Column({name: 'COUNT'})
	count: PollRevisionTranslationOpinionCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_TRANSLATION_ID'})
	pollRevisionTranslation: PollRevisionTranslation

}
