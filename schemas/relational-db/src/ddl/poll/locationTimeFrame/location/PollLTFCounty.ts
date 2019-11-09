import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-control'
import {PollCounty_Id}         from '../../../../types/poll/locationTimeFrame/location/PollLTFCounty'
import {County}                from '../../../location/County'
import {PollLocationTimeFrame} from '../PollLocationTimeFrame'

@Entity()
@Table({name: 'POLL_COUNTIES'})
export class PollLTFCounty {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_COUNTY_ID'})
	id: PollCounty_Id

	@ManyToOne()
	@JoinColumn({name: 'COUNTY_ID', nullable: false})
	country: County

	@ManyToOne()
	@JoinColumn({name: 'POLL_LOCATION_TIME_FRAME_ID', nullable: false})
	locationTimeFrame: PollLocationTimeFrame

}
