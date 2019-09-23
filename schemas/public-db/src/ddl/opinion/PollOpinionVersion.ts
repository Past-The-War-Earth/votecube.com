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
import {
	PollLocationTimeFrame,
}                                      from '../poll/locationTimeFrame/PollLocationTimeFrame'
import {ImmutableRow}                  from '../infrastructure/ImmutableRow'
import {Language}                      from '../infrastructure/Language'
import {PollVariation}                 from '../poll/variation/PollVariation'
import {VoteVariation}                 from '../vote/VoteVariation'
import {PollOpinionVersionRatingCount} from './count/PollOpinionVersionRatingCount'
import {FactorOpinionVersion}          from './FactorOpinionVersion'
import {PollOpinion}                   from './PollOpinion'
import {PollOpinionVersionTranslation} from './translation/PollOpinionVersionTranslation'
import {PollOpinionVersionRating}      from './user/PollOpinionVersionRating'

export type PollOpinionVersion_Id = number

/**
 * This the computed translation (based on most pinned factor variation).
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
	@JoinColumn({name: 'POLL_VARIATION_ID', nullable: false})
	pollVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'VOTE_VARIATION_ID', nullable: false})
	voteVariation: VoteVariation

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@ManyToOne()
	@JoinColumn({name: 'POLL_LOCATION_TIME_FRAME_ID'})
	locationTimeFrame: PollLocationTimeFrame

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
