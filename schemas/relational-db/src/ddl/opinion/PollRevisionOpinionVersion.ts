import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                              from '@airport/air-control'
import {CascadeType}                           from '@airport/ground-control'
import {PollRevisionOpinionVersion_Id}         from '../../types/opinion/PollRevisionOpinionVersion'
import {Language}                              from '../infrastructure/Language'
import {ImmutableRow}                          from '../infrastructure/row/ImmutableRow'
import {VoteRevision}                          from '../vote/VoteRevision'
import {FactorOpinionVersion}                  from './FactorOpinionVersion'
import {PollRevisionOpinion}                   from './PollRevisionOpinion'
import {PollRevisionOpinionVersionTranslation} from './translation/PollRevisionOpinionVersionTranslation'
import {PollRevisionOpinionVersionRating}      from './user/PollRevisionOpinionVersionRating'

/**
 * This the computed translation (based on most pinned factor revision).
 *
 * This record is mutable, it's only got IDs so that's OK.
 *
 * Belongs to PollRevisionOpinion - does not need user tracking
 */
@Entity()
@Table({name: 'POLL_REVISION_OPINION_VERSIONS'})
export class PollRevisionOpinionVersion
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_REVISION_OPINION_VERSION_ID'})
	id: PollRevisionOpinionVersion_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_OPINION_ID', nullable: false})
	pollRevisionOpinion: PollRevisionOpinion

	// NOTE: Optional, an OpinionVersion may or may not be associated with a VoteRevision
	@ManyToOne()
	@JoinColumn({name: 'VOTE_REVISION_ID'})
	voteRevision: VoteRevision

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_REVISION_OPINION_VERSION_ID',
		nullable: false,
		referencedColumnName: 'POLL_REVISION_OPINION_VERSION_ID'
	})
	parent: PollRevisionOpinionVersion

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PollRevisionOpinionVersion[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollOpinionVersion'})
	ratings: PollRevisionOpinionVersionRating[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollOpinionVersion'})
	translations: PollRevisionOpinionVersionTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'pollOpinionVersion'})
	factors: FactorOpinionVersion[]

}
