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
import {AgeSuitability}          from '../../types/common'
import {Poll_Id}                 from '../../types/poll/Poll'
import {ImmutableActorRow}       from '../infrastructure/row/ImmutableActorRow'
import {PollOpinionsCount}       from './count/PollOpinionsCount'
import {PollOpinionsRatingCount} from './count/PollOpinionsRatingCount'
import {PollRatingCount}         from './count/PollRatingCount'
import {PollVoteCount}           from './count/PollVoteCount'
import {PollRun}                 from './run/PollRun'
import {PollType}                from './PollType'
import {Theme}                   from './Theme'
import {ChosenPollTranslation}   from './translation/ChosenPollTranslation'
import {UserPollRating}          from './user/UserPollRating'
import {ChosenPollRevision}      from './revision/ChosenPollRevision'
import {PollRevision}       from './revision/PollRevision'

@Entity()
@Table({name: 'POLLS'})
export class Poll
	extends ImmutableActorRow {

	@GeneratedValue()
	@Column({name: 'POLL_ID'})
	id: Poll_Id

	@Column({name: 'AGE_SUITABILITY', nullable: false})
	ageSuitability: AgeSuitability

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
	chosenRevisions: ChosenPollRevision[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	runs: PollRun[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'poll'})
	allPollRevisions: PollRevision[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'poll'})
	opinionCounts: PollOpinionsCount[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'poll'})
	opinionRatingCounts: PollOpinionsRatingCount[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'poll'})
	voteCounts: PollVoteCount[]

}
