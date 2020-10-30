import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-control'
import {PollRunTown_Id}           from '../../../../types/poll/run/location/PollRunTown'
import {Town}    from '../../../location/Town'
import {PollRun} from '../PollRun'

@Entity()
@Table({name: 'POLL_TOWNS'})
// User information recorded at PollRun level
export class PollRunTown {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_STATE_ID'})
	id: PollRunTown_Id

	@ManyToOne()
	@JoinColumn({name: 'TOWN_ID', nullable: false})
	town: Town

	@ManyToOne()
	@JoinColumn({name: 'POLL_RUN_ID', nullable: false})
	run: PollRun

}
