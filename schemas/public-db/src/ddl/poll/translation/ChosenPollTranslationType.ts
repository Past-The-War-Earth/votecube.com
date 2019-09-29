import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                     from '@airport/air-control'
import {
	ChosenPollTranslationType_Code,
	ChosenPollTranslationType_Id
} from '../../../types/poll/translation/ChosenPollTranslationType'
import {SystemGeneratedRow}           from '../../infrastructure/row/SystemGeneratedRow'

/**
 * Types: some more aggregate stats based on Most responded too, best rated, etc
 */
@Entity()
@Table({name: 'CHOSEN_POLL_TRANSLATION_TYPES'})
export class ChosenPollTranslationType
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'CHOSEN_POLL_TRANSLATION_TYPE_ID'})
	id: ChosenPollTranslationType_Id

	@ManyToOne()
	@JoinColumn({name: 'CHOSEN_POLL_TRANSLATION_CODE', nullable: false})
	code: ChosenPollTranslationType_Code

}
