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
import {ImmutableActorRow}     from '../infrastructure/ImmutableActorRow'
import {PollLabel}             from './label/PollLabel'
import {PollLocationTimeFrame} from './PollLocationTimeFrame'
import {PollRating}            from './PollRating'
import {PollType}              from './PollType'
import {Theme}                 from './Theme'
import {ChosenPollTranslation} from './translation/ChosenPollTranslation'
import {ChosenPollVariation}   from './variation/ChosenPollVariation'
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
	@JoinColumn({
		name: 'PARENT_POLL_ID',
		referencedColumnName: 'POLL_ID'
	})
	parent: Poll

	@OneToMany({mappedBy: 'parent'})
	children: Poll[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	ratings: PollRating[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	pollLabels: PollLabel[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	chosenPollTranslations: ChosenPollTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	chosenVariations: ChosenPollVariation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	locationTimeFrames: PollLocationTimeFrame[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	allPollVariations: PollVariation[]

}
