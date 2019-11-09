import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                            from '@airport/air-control'
import {CascadeType}         from '@airport/ground-control'
import {ImmutableActorRow}   from '../../..'
import {
	PollLocationTimeFrame_EndDate,
	PollLocationTimeFrame_Id,
	PollLocationTimeFrame_StartDate
}                            from '../../../types/poll/locationTimeFrame/PollLocationTimeFrame'
import {Poll}                from '../Poll'
import {ChosenPollVariation} from '../variation/ChosenPollVariation'
import {PollVariation}       from '../variation/PollVariation'
import {PollLTFContinent}    from './location/PollLTFContinent'
import {PollLTFCountry}      from './location/PollLTFCountry'
import {PollLTFCounty}       from './location/PollLTFCounty'
import {PollLTFState}        from './location/PollLTFState'
import {PollLTFTown}         from './location/PollLTFTown'

@Entity()
@Table({name: 'POLL_LOCATION_TIME_FRAMES'})
export class PollLocationTimeFrame
	extends ImmutableActorRow {

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

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'locationTimeFrame'})
	chosenVariations: ChosenPollVariation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'createdAtLocationTimeFrame'})
	createdAtVariations: PollVariation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'locationTimeFrame'})
	pollContinents: PollLTFContinent[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'locationTimeFrame'})
	pollCountries: PollLTFCountry[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'locationTimeFrame'})
	pollStates: PollLTFState[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'locationTimeFrame'})
	pollCounties: PollLTFCounty[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'locationTimeFrame'})
	pollTowns: PollLTFTown[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'locationTimeFrame'})
	pollVariations: PollVariation[]

}
