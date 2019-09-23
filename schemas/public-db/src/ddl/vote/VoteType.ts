import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	Table
}                           from '@airport/air-control'
import {SystemGeneratedRow} from '../infrastructure/SystemGeneratedRow'

export type VoteType_Id = number
export type VoteType_Name = string
export type VoteType_Description = string

/**
 * Reserved for future use - let people on the the target group vote too (
 * since they can see the poll) but track it differently.
 *
 * The only currently supported vote type is "Eligible",
 * meaning made in the specified LocationTimeFrame by a
 * user that belongs to that Location
 */
@Entity()
@Table({name: 'VOTE_TYPES'})
export class VoteType
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'VOTE_TYPE_ID'})
	id: VoteType_Id

	@Column({name: 'VOTE_TYPE_NAME'})
	name: VoteType_Name

	@Column({name: 'VOTE_TYPE_DESCRIPTION'})
	description: VoteType_Description

}
