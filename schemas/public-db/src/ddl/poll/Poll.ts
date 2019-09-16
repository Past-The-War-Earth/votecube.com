import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                              from '@airport/air-control'
import {CascadeType}           from '@airport/ground-control'
import {PollFactorPosition}    from '../factor/position/PollFactorPosition'
import {ImmutableRow}          from '../ImmutableRow'
import {SuitabilityRating}     from '../SuitabilityRating'
import {Theme}                 from '../Theme'
import {PollLabel}             from './PollLabel'
import {PollLocationTimeFrame} from './PollLocationTimeFrame'
import {PollType}              from './PollType'
import {PollVariation}         from './PollVariation'

export type Poll_Id = number
export type Poll_Name = number

@Entity()
@Table({name: 'POLLS'})
export class Poll
	extends ImmutableRow {

	@GeneratedValue()
	@Column({name: 'POLL_ID'})
	id: Poll_Id

	@Column({name: 'POLL_DESCRIPTION', nullable: false})
	name: Poll_Name

	@ManyToOne()
	@JoinColumn({name: 'SUITABILITY_RATING_ID', nullable: false})
	suitabilityRating: SuitabilityRating

	@ManyToOne()
	@JoinColumn({name: 'THEME_ID', nullable: false})
	theme: Theme

	@ManyToOne()
	@JoinColumn({name: 'POLL_TYPE_ID', nullable: false})
	type: PollType

	@ManyToOne()
	@JoinColumn({name: 'PARENT_POLL_ID', referencedColumnName: 'POLL_ID'})
	parentPoll: Poll

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	pollLocationTimeFrames: PollLocationTimeFrame[]

	@OneToMany({mappedBy: 'parentPoll'})
	childPolls: Poll[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	pollVariations: PollVariation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	pollLabels: PollLabel[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	pollFactorPositions: PollFactorPosition[]

}
