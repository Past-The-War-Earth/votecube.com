import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {SystemGeneratedRow} from '../../infrastructure/SystemGeneratedRow'

export type ChosenPollVariationType_Id = number
export type ChosenPollVariationType_Code = string

/**
 * Types: Current, Most responded too, best rated, etc
 */
@Entity()
@Table({name: 'CHOSEN_POLL_VARIATION_TYPES'})
export class ChosenPollVariationType
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'CHOSEN_POLL_VARIATION_TYPE_ID'})
	id: ChosenPollVariationType_Id

	@ManyToOne()
	@JoinColumn({name: 'CHOSEN_POLL_VARIATION_TYPE_CODE', nullable: false})
	code: ChosenPollVariationType_Code

}
