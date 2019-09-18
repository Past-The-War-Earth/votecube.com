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

export type SelectVoteVariationType_Id = number
export type SelectVoteVariationType_Code = string

/**
 * Types: Current, Most responded too, best rated, etc
 */
@Entity()
@Table({name: 'SELECT_VOTE_VARIATION_TYPE_TYPES'})
export class SelectVoteVariationType
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'SELECT_VOTE_VARIATION_TYPE_ID'})
	id: SelectVoteVariationType_Id

	@ManyToOne()
	@JoinColumn({name: 'SELECT_VOTE_VARIATION_CODE', nullable: false})
	code: SelectVoteVariationType_Code

}
