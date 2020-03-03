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
import {MutableActorRow}            from '../infrastructure/row/MutableActorRow'
import {PollRevision}               from '../poll/revision/PollRevision'
import {PollRun}                    from '../poll/run/PollRun'
import {Vote}                       from '../vote/Vote'
import {PollRevisionOpinionVersion} from './PollRevisionOpinionVersion'

@Entity()
@Table({name: 'POLL_REVISION_OPINIONS'})
export class PollRevisionOpinion
	extends MutableActorRow {

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
	versions: PollRevisionOpinionVersion[]

}
