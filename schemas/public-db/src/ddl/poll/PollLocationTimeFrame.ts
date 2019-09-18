import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                      from '@airport/air-control'
import {CascadeType}   from '@airport/ground-control'
import {PollContinent} from '../location/PollContinent'
import {PollCountry}   from '../location/PollCountry'
import {PollCounty}    from '../location/PollCounty'
import {PollState}     from '../location/PollState'
import {PollTown}      from '../location/PollTown'
import {Poll}          from '../poll/Poll'
import {PollVariation} from './variation/PollVariation'

export type PollLocationTimeFrame_Id = number
export type PollLocationTimeFrame_EndDate = Date
export type PollLocationTimeFrame_StartDate = Date

@Entity()
@Table({name: 'POLL_LOCATION_TIME_FRAMES'})
export class PollLocationTimeFrame {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_LOCATION_TIME_FRAME_ID'})
	id: PollLocationTimeFrame_Id

	@Column({name: 'END_DATE', nullable: false})
	endDate: PollLocationTimeFrame_EndDate

	@Column({name: 'START_DATE', nullable: false})
	startDate: PollLocationTimeFrame_StartDate

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID'})
	poll: Poll

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	pollContinents: PollContinent[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	pollCountries: PollCountry[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	pollStates: PollState[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	pollCounties: PollCounty[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	pollTowns: PollTown[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'locationTimeFrame'})
	pollVariations: PollVariation[]

}
