import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-traffic-control'
import {PollRunState_Id}          from '../../../../types/poll/run/location/PollRunState'
import {State}   from '../../../location/State'
import {PollRun} from '../PollRun'

@Entity()
@Table({name: 'POLL_STATES'})
// User information recorded at PollRun level
export class PollRunState {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_STATE_ID'})
	id: PollRunState_Id

	@ManyToOne()
	@JoinColumn({name: 'STATE_ID', nullable: false})
	state: State

	@ManyToOne()
	@JoinColumn({name: 'POLL_RUN_ID', nullable: false})
	run: PollRun

}
