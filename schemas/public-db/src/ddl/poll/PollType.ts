import {
	Column,
	DbString,
	Entity,
	Id,
	Table
} from '@airport/air-control'
import {ReferenceRow} from '@airport/holding-pattern'

export type PollType_Id = number
export type PollType_Value = 'cube'

@Entity()
@Table({name: 'POLL_TYPES'})
export class PollType
	extends ReferenceRow {

	@Id()
	@Column({name: 'POLL_TYPE_ID'})
	id: PollType_Id

	@Column({name: 'POLL_TYPE_VALUE'})
	@DbString()
	value: PollType_Value

}
