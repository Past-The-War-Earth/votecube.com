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
	ChosenVoteVariationType_Code,
	ChosenVoteVariationType_Id
}                           from '../../types/vote/ChosenVoteVariationType'
import {SystemGeneratedRow} from '../infrastructure/row/SystemGeneratedRow'

/**
 * Types: Current, Most responded too, best rated, etc
 */
@Entity()
@Table({name: 'CHOSEN_VOTE_VARIATION_TYPE_TYPES'})
export class ChosenVoteVariationType
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'CHOSEN_VOTE_VARIATION_TYPE_ID'})
	id: ChosenVoteVariationType_Id

	@ManyToOne()
	@JoinColumn({name: 'CHOSEN_VOTE_VARIATION_CODE', nullable: false})
	code: ChosenVoteVariationType_Code

}
