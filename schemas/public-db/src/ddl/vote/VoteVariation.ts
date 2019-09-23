import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                 from '@airport/air-control'
import {CascadeType}              from '@airport/ground-control'
import {ImmutableActorRow}        from '../infrastructure/ImmutableActorRow'
import {PollLocationTimeFrame}    from '../poll/locationTimeFrame/PollLocationTimeFrame'
import {PollVariation}            from '../poll/variation/PollVariation'
import {PollVariationTranslation} from '../poll/variation/translation/PollVariationTranslation'
import {Vote}                     from './Vote'
import {VoteFactor}               from './VoteFactor'

export type VoteVariation_Id = number

@Entity()
@Table({name: 'VOTE_VARIATIONS'})
export class VoteVariation
	extends ImmutableActorRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'VOTE_VARIATION_ID'})
	id: VoteVariation_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID', nullable: false})
	variation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'VOTE_ID', nullable: false})
	vote: Vote

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_TRANSLATION_ID', nullable: false})
	variationTranslation: PollVariationTranslation

	@ManyToOne()
	@JoinColumn({name: 'POLL_LOCATION_TIME_FRAME_ID', nullable: false})
	locationTimeFrame: PollLocationTimeFrame

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'voteVariation'})
	factors: VoteFactor[]

}
