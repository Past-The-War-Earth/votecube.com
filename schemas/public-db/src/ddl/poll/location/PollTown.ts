import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}             from '@airport/air-control'
import {Poll} from '../Poll'
import {Town} from '../../location/Town'

export type PollTown_Id = number

@Entity()
@Table({name: 'POLL_TOWNS'})
export class PollTown {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_STATE_ID'})
	id: PollTown_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'TOWN_ID', nullable: false})
	town: Town

}
