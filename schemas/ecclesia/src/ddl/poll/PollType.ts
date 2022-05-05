import {
	Column,
	DbString,
	Entity,
	Id,
	Table
}                           from '@airport/air-traffic-control'
import {
	PollType_Id,
	PollType_Value
}                           from '../../types/poll/PollType'
import {SystemGeneratedRow} from '../infrastructure/row/SystemGeneratedRow'

@Entity()
@Table({name: 'POLL_TYPES'})
export class PollType
	extends SystemGeneratedRow {

	@Id()
	@Column({name: 'POLL_TYPE_ID'})
	id: PollType_Id

	@Column({name: 'POLL_TYPE_VALUE'})
	@DbString()
	value: PollType_Value

}
