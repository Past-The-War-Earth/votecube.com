import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-control'
import {Town}                  from '../../../location/Town'
import {PollLocationTimeFrame} from '../PollLocationTimeFrame'

export type PollTown_Id = number

@Entity()
@Table({name: 'POLL_TOWNS'})
export class PollLTFTown {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_STATE_ID'})
	id: PollTown_Id

	@ManyToOne()
	@JoinColumn({name: 'TOWN_ID', nullable: false})
	town: Town

	@ManyToOne()
	@JoinColumn({name: 'POLL_LOCATION_TIME_FRAME_ID', nullable: false})
	locationTimeFrame: PollLocationTimeFrame

}
