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

export type SelectPollVariationType_Id = number
export type SelectPollVariationType_Code = string

/**
 * Types: Current, Most responded too, best rated, etc
 */
@Entity()
@Table({name: 'SELECT_POLL_VARIATION_TYPES'})
export class SelectPollVariationType
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'SELECT_POLL_VARIATION_TYPE_ID'})
	id: SelectPollVariationType_Id

	@ManyToOne()
	@JoinColumn({name: 'SELECT_POLL_VARIATION_TYPE_CODE', nullable: false})
	code: SelectPollVariationType_Code

}
