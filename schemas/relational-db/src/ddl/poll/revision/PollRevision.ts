import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                       from '@airport/air-control'
import {CascadeType}                    from '@airport/ground-control'
import {AgeSuitability}                 from '../../../types/common'
import {PollRevision_Id}                from '../../../types/poll/revision/PollRevision'
import {ImmutableActorRow}              from '../../infrastructure/row/ImmutableActorRow'
import {PollOpinion}                    from '../../opinion/PollOpinion'
import {PollRun}                        from '../run/PollRun'
import {Poll}                           from '../Poll'
import {ChosenPollTranslation}          from '../translation/ChosenPollTranslation'
import {UserPollRevisionRating}         from '../user/UserPollRevisionRating'
import {PollRevisionOpinionCount}       from './count/PollRevisionOpinionCount'
import {PollRevisionOpinionRatingCount} from './count/PollRevisionOpinionRatingCount'
import {PollRevisionRatingCount}        from './count/PollRevisionRatingCount'
import {PollRevisionVoteCount}          from './count/PollRevisionVoteCount'
import {PollRevisionLabel}              from './PollRevisionLabel'
import {PollFactorPositionRevision} from './structure/PollFactorPositionRevision'
import {PollFactorSkinRevision}     from './structure/PollFactorSkinRevision'
import {PollFactorRevision}      from './structure/PollFactorRevision'
import {PollPositionRevision}    from './structure/PollPositionRevision'
import {PollRevisionTranslation} from './translation/PollRevisionTranslation'

/**
 * Different revisions of a given poll.
 */
@Entity()
@Table({name: 'POLL_REVISIONS'})
export class PollRevision
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_REVISION_ID'})
	id: PollRevision_Id

	@Column({name: 'AGE_SUITABILITY', nullable: false})
	ageSuitability: AgeSuitability

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID'})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'POLL_RUN_ID'})
	createdAtRun: PollRun

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_REVISION_ID',
		referencedColumnName: 'POLL_REVISION_ID'
	})
	parent: PollRevision

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PollRevision[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollRevision'})
	ratings: UserPollRevisionRating[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollRevision'})
	ratingCounts: PollRevisionRatingCount[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollRevision'})
	revisionLabels: PollRevisionLabel[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollRevision'})
	pollFactorPositionRevisions: PollFactorPositionRevision[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollRevision'})
	factors: PollFactorRevision[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollRevision'})
	factorSkins: PollFactorSkinRevision[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollRevision'})
	positions: PollPositionRevision[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollRevision'})
	chosenTranslations: ChosenPollTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollRevision'})
	allTranslations: PollRevisionTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollRevision'})
	opinions: PollOpinion[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollRevision'})
	opinionCounts: PollRevisionOpinionCount[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollRevision'})
	opinionRatingCounts: PollRevisionOpinionRatingCount[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollRevision'})
	voteCounts: PollRevisionVoteCount[]

}
