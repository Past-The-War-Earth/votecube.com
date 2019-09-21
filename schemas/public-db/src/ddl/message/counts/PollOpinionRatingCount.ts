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
import {PollOpinion}        from '../PollOpinion'

export type PollOpinionRatingCount_Id = number
export type PollOpinionRatingCount_Count = number

/**
 * Computation of all ratings (including reversals) on the PollOpinion.
 */
@Entity()
@Table({name: 'POLL_OPINION_RATING_COUNTS'})
export class PollOpinionRatingCount
	extends SystemGeneratedRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_OPINION_RATING_COUNT_ID'})
	id: PollOpinionRatingCount_Id

	@Column({name: 'COUNT'})
	count: PollOpinionRatingCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_OPINION_ID'})
	pollOpinion: PollOpinion

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
