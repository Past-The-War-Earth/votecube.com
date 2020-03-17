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
import {
	PollRevision_Depth,
	PollRevision_Id
}                                   from '../../../types/poll/revision/PollRevision'
import {AgeSuitableRow}          from '../../infrastructure/row/AgeSuitableRow'
import {PollRevisionOpinion}        from '../../opinion/PollRevisionOpinion'
import {Poll}                       from '../Poll'
import {PollRevisionRating}         from '../rating/PollRevisionRating'
import {PollRun}                    from '../run/PollRun'
import {Outcome}                    from './Outcome'
import {PollRevisionFactorPosition} from './PollRevisionFactorPosition'
import {PollRevisionTranslation}    from './translation/PollRevisionTranslation'

/**
 * Different revisions of a given poll.
 */
@Entity()
@Table({name: 'POLL_REVISIONS'})
export class PollRevision
	extends AgeSuitableRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_REVISION_ID'})
	id: PollRevision_Id

	@Column({name: 'DEPTH'})
	depth: PollRevision_Depth

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID'})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'POLL_RUN_ID'})
	createdAtRun: PollRun

	@ManyToOne()
	@JoinColumn({
		name: 'OUTCOME_A_VERSION_ID',
		referencedColumnName: 'OUTCOME_ID'
	})
	outcomeVersionA: Outcome

	@ManyToOne()
	@JoinColumn({
		name: 'OUTCOME_B_VERSION_ID',
		referencedColumnName: 'OUTCOME_ID'
	})
	outcomeVersionB: Outcome

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_REVISION_ID',
		referencedColumnName: 'POLL_REVISION_ID'
	})
	parent: PollRevision

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PollRevision[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollRevision'})
	ratings: PollRevisionRating[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollRevision'})
	factorPositions: PollRevisionFactorPosition[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollRevision'})
	allTranslations: PollRevisionTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollRevision'})
	opinions: PollRevisionOpinion[]

}
