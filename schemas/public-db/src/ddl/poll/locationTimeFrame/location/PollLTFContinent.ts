import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                              from '@airport/air-control'
import {PollContinent_Id}      from '../../../../types/poll/locationTimeFrame/location/PollLTFContinent'
import {Continent}             from '../../../location/Continent'
import {PollLocationTimeFrame} from '../PollLocationTimeFrame'

// @Singleton()
// @InsertOnly()
@Entity()
@Table({name: 'POLL_CONTINENTS'})
export class PollLTFContinent {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_CONTINENT_ID'})
	id: PollContinent_Id

	@ManyToOne()
	@JoinColumn({name: 'CONTINENT_ID', nullable: false})
	continent: Continent

	@ManyToOne()
	@JoinColumn({name: 'POLL_LOCATION_TIME_FRAME_ID', nullable: false})
	locationTimeFrame: PollLocationTimeFrame

}
