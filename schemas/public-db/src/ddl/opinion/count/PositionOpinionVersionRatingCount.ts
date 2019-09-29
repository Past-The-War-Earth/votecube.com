import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                      from '@airport/air-control'
import {
	PositionOpinionRatingCount_Count,
	PositionOpinionRatingCount_Id
} from '../../../types/opinion/count/PositionOpinionVersionRatingCount'
import {Rating}                        from '../../infrastructure/rating/Rating'
import {SystemGeneratedRow}            from '../../infrastructure/row/SystemGeneratedRow'
import {PositionOpinionVersion}        from '../PositionOpinionVersion'

/**
 * Computation of all ratings (including reversals) on the PositionOpinionVersion.
 */
@Entity()
@Table({name: 'POSITION_OPINION_VERSION_RATING_COUNTS'})
export class PositionOpinionVersionRatingCount
	extends SystemGeneratedRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'POSITION_OPINION_VERSION_RATING_COUNT_ID'})
	id: PositionOpinionRatingCount_Id

	@Column({name: 'COUNT'})
	count: PositionOpinionRatingCount_Count

	@ManyToOne()
	@JoinColumn({name: 'POSITION_OPINION_VERSION_ID'})
	positionOpinionVersion: PositionOpinionVersion

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
