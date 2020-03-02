import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {
	ChosenVoteRevisionType_Code,
	ChosenVoteRevisionType_Id
}                           from '../../types/vote/ChosenVoteRevisionType'
import {SystemGeneratedRow} from '../infrastructure/row/SystemGeneratedRow'

/**
 * Types: Current, Most responded too, best rated, etc
 */
@Entity()
@Table({name: 'CHOSEN_VOTE_REVISION_TYPE_TYPES'})
export class ChosenVoteRevisionType
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'CHOSEN_VOTE_REVISION_TYPE_ID'})
	id: ChosenVoteRevisionType_Id

	@ManyToOne()
	@JoinColumn({name: 'CHOSEN_VOTE_REVISION_CODE', nullable: false})
	code: ChosenVoteRevisionType_Code

}
