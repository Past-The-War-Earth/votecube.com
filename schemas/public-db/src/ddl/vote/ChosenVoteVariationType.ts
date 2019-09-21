import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                     from '@airport/air-control'
import {ImmutableRow} from '../infrastructure/ImmutableRow'

export type ChosenVoteVariationType_Id = number
export type ChosenVoteVariationType_Code = string

/**
 * Types: Current, Most responded too, best rated, etc
 */
@Entity()
@Table({name: 'CHOSEN_VOTE_VARIATION_TYPE_TYPES'})
export class ChosenVoteVariationType
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'CHOSEN_VOTE_VARIATION_TYPE_ID'})
	id: ChosenVoteVariationType_Id

	@ManyToOne()
	@JoinColumn({name: 'CHOSEN_VOTE_VARIATION_CODE', nullable: false})
	code: ChosenVoteVariationType_Code

}
