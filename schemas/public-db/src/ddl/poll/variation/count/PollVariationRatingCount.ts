import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {
	PollVariationRatingCount_Count,
	PollVariationRatingCount_Id
}                           from '../../../../types/poll/variation/count/PollVariationRatingCount'
import {Rating}             from '../../../infrastructure/rating/Rating'
import {SystemGeneratedRow} from '../../../infrastructure/row/SystemGeneratedRow'
import {PollVariation}      from '../PollVariation'

/**
 * Computation of all ratings (including reversals).
 */
@Entity()
@Table({name: 'POLL_VARIATION_RATING_COUNTS'})
export class PollVariationRatingCount
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'POLL_VARIATION_RATING_COUNT_ID'})
	id: PollVariationRatingCount_Id

	@Column({name: 'COUNT'})
	count: PollVariationRatingCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pollVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
