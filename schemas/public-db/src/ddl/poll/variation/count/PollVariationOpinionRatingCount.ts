import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {Rating}             from '../../../infrastructure/rating/Rating'
import {SystemGeneratedRow} from '../../../infrastructure/SystemGeneratedRow'
import {PollVariation}      from '../PollVariation'

export type PollVariationOpinionRatingCount_Id = number
export type PollVariationOpinionRatingCount_Count = number

/**
 * Count of all opinion ratings (including reversals).
 */
@Entity()
@Table({name: 'POLL_VARIATION_OPINION_RATING_COUNTS'})
export class PollVariationOpinionRatingCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_VARIATION_OPINION_RATING_COUNT_ID'})
	id: PollVariationOpinionRatingCount_Id

	@Column({name: 'COUNT'})
	count: PollVariationOpinionRatingCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pollVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
