import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-control'
import {PollCountry_Id}        from '../../../../types/poll/locationTimeFrame/location/PollLTFCountry'
import {Country}               from '../../../location/Country'
import {PollLocationTimeFrame} from '../PollLocationTimeFrame'

@Entity()
@Table({name: 'POLL_COUNTRIES'})
export class PollLTFCountry {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_COUNTRY_ID'})
	id: PollCountry_Id

	@ManyToOne()
	@JoinColumn({name: 'COUNTRY_ID', nullable: false})
	country: Country

	@ManyToOne()
	@JoinColumn({name: 'POLL_LOCATION_TIME_FRAME_ID', nullable: false})
	locationTimeFrame: PollLocationTimeFrame

}
