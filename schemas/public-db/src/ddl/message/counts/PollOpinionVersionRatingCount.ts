import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {Rating}             from '../../infrastructure/rating/Rating'
import {SystemGeneratedRow} from '../../infrastructure/SystemGeneratedRow'
import {PollOpinionVersion} from '../PollOpinionVersion'

export type PollOpinionRatingCount_Id = number
export type PollOpinionRatingCount_Count = number

/**
 * Computation of all ratings (including reversals) on the PollOpinionVersion.
 */
@Entity()
@Table({name: 'POLL_OPINION_VERSION_RATING_COUNTS'})
export class PollOpinionVersionRatingCount
	extends SystemGeneratedRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_OPINION_VERSION_RATING_COUNT_ID'})
	id: PollOpinionRatingCount_Id

	@Column({name: 'COUNT'})
	count: PollOpinionRatingCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_OPINION_VERSION_ID'})
	pollOpinionVersion: PollOpinionVersion

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
