import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                from '@airport/air-control'
import {CascadeType}             from '@airport/ground-control'
import {Poll_Id}                 from '../../types/poll/Poll'
import {ImmutableActorDocument}  from '../infrastructure/document/ImmutableActorDocument'
import {PollOpinionsCount}       from './count/PollOpinionsCount'
import {PollOpinionsRatingCount} from './count/PollOpinionsRatingCount'
import {PollRatingCount}         from './count/PollRatingCount'
import {PollVoteCount}           from './count/PollVoteCount'
import {PollLocationTimeFrame}   from './locationTimeFrame/PollLocationTimeFrame'
import {PollType}                from './PollType'
import {Theme}                   from './Theme'
import {ChosenPollTranslation}   from './translation/ChosenPollTranslation'
import {UserPollRating}          from './user/UserPollRating'
import {ChosenPollVariation}     from './variation/ChosenPollVariation'
import {PollVariation}           from './variation/PollVariation'

@Entity()
@Table({name: 'POLLS'})
export class Poll
	extends ImmutableActorDocument {

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
	ratings: UserPollRating[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'poll'})
	ratingCounts: PollRatingCount[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	chosenPollTranslations: ChosenPollTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	chosenVariations: ChosenPollVariation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	locationTimeFrames: PollLocationTimeFrame[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	allPollVariations: PollVariation[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'poll'})
	opinionCounts: PollOpinionsCount[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'poll'})
	opinionRatingCounts: PollOpinionsRatingCount[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'poll'})
	voteCounts: PollVoteCount[]

}
