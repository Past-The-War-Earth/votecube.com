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
import {PollRevisionOpinion_Id}     from '../../types/opinion/PollRevisionOpinion'
import {ImmutableActorRow}            from '../infrastructure/row/ImmutableActorRow'
import {PollRevision}               from '../poll/revision/PollRevision'
import {PollRun}                    from '../poll/run/PollRun'
import {Vote}                       from '../vote/Vote'
import {FactorOpinionVersion}       from './FactorOpinionVersion'
import {OutcomeOpinionVersion}      from './OutcomeOpinionVersion'
import {PollRevisionOpinionVersion} from './PollRevisionOpinionVersion'
import {PositionOpinionVersion}     from './PositionOpinionVersion'
import {PollRevisionOpinionRating}  from './rating/PollRevisionOpinionRating'

@Entity()
@Table({name: 'POLL_REVISION_OPINIONS'})
export class PollRevisionOpinion
	extends ImmutableActorRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_REVISION_OPINION_ID'})
	id: PollRevisionOpinion_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID', nullable: false})
	pollRevision: PollRevision

	// NOTE: Optional, an Opinion may or may not be associated with a PollRun
	@ManyToOne()
	@JoinColumn({name: 'POLL_RUN_ID'})
	run: PollRun

	// NOTE: Optional, an Opinion may or may not be associated with a Vote
	@ManyToOne()
	@JoinColumn({name: 'VOTE_ID'})
	vote: Vote

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollRevisionOpinion'})
	ratings: PollRevisionOpinionRating[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollRevisionOpinion'})
	versions: PollRevisionOpinionVersion[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollRevisionOpinion'})
	factors: FactorOpinionVersion[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollRevisionOpinion'})
	outcomes: OutcomeOpinionVersion[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollRevisionOpinion'})
	positions: PositionOpinionVersion[]

}
