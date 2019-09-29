import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                   from '@airport/air-control'
import {
	ChosenPollVariationType_Code,
	ChosenPollVariationType_Id
} from '../../../types/poll/variation/ChosenPollVariationType'
import {SystemGeneratedRow}         from '../../infrastructure/row/SystemGeneratedRow'

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
