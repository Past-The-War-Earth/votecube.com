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
import {ImmutableActorRow}     from '../infrastructure/ImmutableActorRow'
import {PollLabel}             from './label/PollLabel'
import {PollLocationTimeFrame} from './PollLocationTimeFrame'
import {PollSuitabilityRating} from './PollSuitabilityRating'
import {PollTranslation}       from './translation/PollTranslation'
import {PollType}              from './PollType'
import {Theme}                 from './Theme'
import {DefaultPollVariation}  from './variation/DefaultPollVariation'
import {PollVariation}         from './variation/PollVariation'

export type Poll_Id = number

@Entity()
@Table({name: 'POLLS'})
export class Poll
	extends ImmutableActorRow {

	@GeneratedValue()
	@Column({name: 'POLL_ID'})
	id: Poll_Id

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
	suitabilityRatings: PollSuitabilityRating[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	defaultPollVariation: DefaultPollVariation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	translations: PollTranslation[]

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
