import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-control'
import {State}                 from '../../../location/State'
import {PollLocationTimeFrame} from '../PollLocationTimeFrame'

export type PollState_Id = number

@Entity()
@Table({name: 'POLL_STATES'})
export class PollLTFState {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_STATE_ID'})
	id: PollState_Id

	@ManyToOne()
	@JoinColumn({name: 'STATE_ID', nullable: false})
	state: State

	@ManyToOne()
	@JoinColumn({name: 'POLL_LOCATION_TIME_FRAME_ID', nullable: false})
	locationTimeFrame: PollLocationTimeFrame

}
