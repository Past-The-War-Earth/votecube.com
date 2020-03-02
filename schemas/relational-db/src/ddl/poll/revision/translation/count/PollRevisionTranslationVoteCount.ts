import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                                 from '@airport/air-control'
import {
	PollRevisionTranslationVoteCount_Count,
	PollRevisionTranslationVoteCount_Id
}                                 from '../../../../../types/poll/revision/translation/count/PollRevisionTranslationVoteCount'
import {SystemGeneratedRow}      from '../../../../infrastructure/row/SystemGeneratedRow'
import {PollRevisionTranslation} from '../PollRevisionTranslation'

/**
 * Count of all votes.
 */
@Entity()
@Table({name: 'POLL_REVISION_TRANSLATION_VOTE_COUNTS'})
export class PollRevisionTranslationVoteCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_REVISION_TRANSLATION_VOTE_COUNT_ID'})
	id: PollRevisionTranslationVoteCount_Id

	@Column({name: 'COUNT'})
	count: PollRevisionTranslationVoteCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_TRANSLATION_ID'})
	pollRevisionTranslation: PollRevisionTranslation

}
