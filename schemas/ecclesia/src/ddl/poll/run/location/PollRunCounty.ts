import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-traffic-control'
import {PollRunCounty_Id}         from '../../../../types/poll/run/location/PollRunCounty'
import {County}  from '../../../location/County'
import {PollRun} from '../PollRun'

@Entity()
@Table({name: 'POLL_COUNTIES'})
// User information recorded at PollRun level
export class PollRunCounty {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_COUNTY_ID'})
	id: PollRunCounty_Id

	@ManyToOne()
	@JoinColumn({name: 'COUNTY_ID', nullable: false})
	country: County

	@ManyToOne()
	@JoinColumn({name: 'POLL_RUN_ID', nullable: false})
	run: PollRun

}
