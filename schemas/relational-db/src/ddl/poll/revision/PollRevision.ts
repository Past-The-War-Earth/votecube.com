import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                   from '@airport/air-control'
import {CascadeType}                from '@airport/ground-control'
import {AgeSuitability}             from '../../../types/common'
import {PollRevision_Id}            from '../../../types/poll/revision/PollRevision'
import {ImmutableActorRow}          from '../../infrastructure/row/ImmutableActorRow'
import {PollRevisionOpinion}        from '../../opinion/PollRevisionOpinion'
import {Poll}                       from '../Poll'
import {PollRun}                    from '../run/PollRun'
import {UserPollRevisionRating}     from '../user/UserPollRevisionRating'
import {OutcomeVersion}             from './OutcomeVersion'
import {PollRevisionFactorPosition} from './PollRevisionFactorPosition'
import {PollRevisionTranslation}    from './translation/PollRevisionTranslation'

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
		name: 'OUTCOME_A_VERSION_ID',
		referencedColumnName: 'OUTCOME_VERSION_ID'
	})
	outcomeVersionA: OutcomeVersion

	@ManyToOne()
	@JoinColumn({
		name: 'OUTCOME_B_VERSION_ID',
		referencedColumnName: 'OUTCOME_VERSION_ID'
	})
	outcomeVersionB: OutcomeVersion

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

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollRevision'})
	factorPositions: PollRevisionFactorPosition[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollRevision'})
	allTranslations: PollRevisionTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollRevision'})
	opinions: PollRevisionOpinion[]

}
