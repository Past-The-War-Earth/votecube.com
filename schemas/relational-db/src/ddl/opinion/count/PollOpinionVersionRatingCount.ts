import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                         from '@airport/air-control'
import {
	PollOpinionVersionRatingCount_Count,
	PollOpinionVersionRatingCount_Id
} from '../../../types/opinion/count/PollOpinionVersionRatingCount'
import {Rating}                           from '../../infrastructure/rating/Rating'
import {SystemGeneratedRow}               from '../../infrastructure/row/SystemGeneratedRow'
import {PollOpinionVersion}               from '../PollOpinionVersion'

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
	id: PollOpinionVersionRatingCount_Id

	@Column({name: 'COUNT'})
	count: PollOpinionVersionRatingCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POLL_OPINION_VERSION_ID'})
	pollOpinionVersion: PollOpinionVersion

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
