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
	ChosenPollRevisionType_Code,
	ChosenPollRevisionType_Id
} from '../../../types/poll/revision/ChosenPollRevisionType'
import {SystemGeneratedRow}         from '../../infrastructure/row/SystemGeneratedRow'

/**
 * Types: Current, Most responded too, best rated, etc
 */
@Entity()
@Table({name: 'CHOSEN_POLL_REVISION_TYPES'})
export class ChosenPollRevisionType
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'CHOSEN_POLL_REVISION_TYPE_ID'})
	id: ChosenPollRevisionType_Id

	@ManyToOne()
	@JoinColumn({name: 'CHOSEN_POLL_REVISION_TYPE_CODE', nullable: false})
	code: ChosenPollRevisionType_Code

}
