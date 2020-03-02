import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                      from '@airport/air-control'
import {CascadeType}                   from '@airport/ground-control'
import {PollOpinionVersion_Id}         from '../../types/opinion/PollOpinionVersion'
import {
	PollRun,
}                                      from '../poll/run/PollRun'
import {ImmutableRow}                  from '../infrastructure/row/ImmutableRow'
import {Language}      from '../infrastructure/Language'
import {PollRevision}  from '../poll/revision/PollRevision'
import {VoteRevision} from '../vote/VoteRevision'
import {PollOpinionVersionRatingCount} from './count/PollOpinionVersionRatingCount'
import {FactorOpinionVersion}          from './FactorOpinionVersion'
import {PollOpinion}                   from './PollOpinion'
import {PollOpinionVersionTranslation} from './translation/PollOpinionVersionTranslation'
import {PollOpinionVersionRating}      from './user/PollOpinionVersionRating'

/**
 * This the computed translation (based on most pinned factor revision).
 *
 * This record is mutable, it's only got IDs so that's OK.
 *
 * Belongs to PollOpinion - does not need user tracking
 */
@Entity()
@Table({name: 'POLL_OPINION_VERSIONS'})
export class PollOpinionVersion
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_OPINION_VERSION_ID'})
	id: PollOpinionVersion_Id

	@ManyToOne()
	@JoinColumn({
		name: 'POLL_OPINION_ID', nullable: false
	})
	pollOpinion: PollOpinion

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_ID', nullable: false})
	pollRevision: PollRevision

	@ManyToOne()
	@JoinColumn({name: 'VOTE_REVISION_ID', nullable: false})
	voteRevision: VoteRevision

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@ManyToOne()
	@JoinColumn({name: 'POLL_RUN_ID'})
	run: PollRun

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_OPINION_VERSION_ID',
		nullable: false,
		referencedColumnName: 'POLL_OPINION_VERSION_ID'
	})
	parent: PollOpinionVersion

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PollOpinionVersion[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollOpinionVersion'})
	ratings: PollOpinionVersionRating[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollOpinionVersion'})
	translations: PollOpinionVersionTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollOpinionVersion'})
	factors: FactorOpinionVersion[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollOpinionVersion'})
	ratingCounts: PollOpinionVersionRatingCount[]

}
