import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table,
	TraditionalServerSeq
}                           from '@airport/air-control'
import {CascadeType}        from '@airport/ground-control'
import {ImmutableRepoRow}   from '@airport/holding-pattern'
import {PollContinent}      from '../location/PollContinent'
import {PollCountry}        from '../location/PollCountry'
import {PollState}          from '../location/PollState'
import {PollTown}           from '../location/PollTown'
import {Theme}              from '../Theme'
import {PollFactorPosition} from './PollFactorPosition'
import {PollLabel}          from './PollLabel'
import {PollType}           from './PollType'

export type Poll_Id = number
export type Poll_EndDate = Date
export type Poll_Name = number
export type Poll_StartDate = Date

@Entity()
@Table({name: 'POLLS'})
export class Poll
	extends ImmutableRepoRow {

	// @GeneratedValue()
	@TraditionalServerSeq()
	@Column({name: 'POLL_ID'})
	id: Poll_Id

	@Column({name: 'END_DATE', nullable: false})
	endDate: Poll_EndDate

	@Column({name: 'START_DATE', nullable: false})
	startDate: Poll_StartDate

	@Column({name: 'POLL_DESCRIPTION', nullable: false})
	name: Poll_Name

	@ManyToOne()
	// @JoinColumn({name: 'PARENT_POLL_ID', referencedColumnName: 'POLL_ID'})
	parentPoll: Poll

	@ManyToOne()
	@JoinColumn({name: 'THEME_ID', nullable: false})
	theme: Theme

	@ManyToOne()
	@JoinColumn({name: 'POLL_TYPE_ID', nullable: false})
	type: PollType

	@OneToMany({mappedBy: 'parentPoll'})
	childPolls: Poll[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	pollContinents: PollContinent[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	pollCountries: PollCountry[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	pollLabels: PollLabel[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	pollFactorPositions: PollFactorPosition[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	pollStates: PollState[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	pollTowns: PollTown[]

}
