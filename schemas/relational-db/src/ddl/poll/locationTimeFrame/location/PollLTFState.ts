import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-control'
import {PollState_Id}          from '../../../../types/poll/locationTimeFrame/location/PollLTFState'
import {State}                 from '../../../location/State'
import {PollLocationTimeFrame} from '../PollLocationTimeFrame'

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
