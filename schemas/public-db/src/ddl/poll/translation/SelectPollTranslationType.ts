import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                     from '@airport/air-control'
import {ImmutableRow} from '../../infrastructure/ImmutableRow'

export type SelectPollTranslation_Id = number
export type SelectPollTranslation_Code = string

/**
 * Types: some more aggregate stats based on Most responded too, best rated, etc
 */
@Entity()
@Table({name: 'SELECT_POLL_TRANSLATION_TYPES'})
export class SelectPollTranslationType
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'SELECT_POLL_TRANSLATION_TYPE_ID'})
	id: SelectPollTranslation_Id

	@ManyToOne()
	@JoinColumn({name: 'SELECT_POLL_TRANSLATION_CODE', nullable: false})
	code: SelectPollTranslation_Code

}
