import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                from '@airport/air-control'
import {CascadeType}             from '@airport/ground-control'
import {VoteRevision_Id}         from '../../types/vote/VoteVariation'
import {ImmutableActorRow}       from '../infrastructure/row/ImmutableActorRow'
import {PollRun}                 from '../poll/run/PollRun'
import {PollRevision}            from '../poll/revision/PollRevision'
import {PollRevisionTranslation} from '../poll/revision/translation/PollRevisionTranslation'
import {Vote}                    from './Vote'
import {VoteFactor}              from './VoteFactor'

@Entity()
@Table({name: 'VOTE_REVISIONS'})
export class VoteRevision
	extends ImmutableActorRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'VOTE_REVISION_ID'})
	id: VoteRevision_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_ID', nullable: false})
	revision: PollRevision

	@ManyToOne()
	@JoinColumn({name: 'VOTE_ID', nullable: false})
	vote: Vote

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_TRANSLATION_ID', nullable: false})
	revisionTranslation: PollRevisionTranslation

	@ManyToOne()
	@JoinColumn({name: 'POLL_RUN_ID', nullable: false})
	run: PollRun

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'voteRevision'})
	factors: VoteFactor[]

}
