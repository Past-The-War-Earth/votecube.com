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
import {ImmutableRow}             from '../ImmutableRow'
import {PollLocationTimeFrame}    from '../poll/PollLocationTimeFrame'
import {PollVariation}            from '../poll/PollVariation'
import {PollVariationTranslation} from '../poll/PollVariationTranslation'
import {Vote}                     from './Vote'
import {VoteFactor}               from './VoteFactor'

export type VoteVariation_Id = number

@Entity()
@Table({name: 'VOTE_VARIATIONS'})
export class VoteVariation
	extends ImmutableRow {

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
