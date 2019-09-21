import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                             from '@airport/air-control'
import {Rating}               from '../../infrastructure/rating/Rating'
import {SystemGeneratedRow}   from '../../infrastructure/SystemGeneratedRow'
import {FactorOpinionVersion} from '../FactorOpinionVersion'

export type FactorOpinionRatingCount_Id = number
export type FactorOpinionRatingCount_Count = number

/**
 * Computation of all ratings (including reversals) on the FactorOpinionVersion.
 */
@Entity()
@Table({name: 'FACTOR_OPINION_VERSION_RATING_COUNTS'})
export class FactorOpinionVersionRatingCount
	extends SystemGeneratedRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'FACTOR_OPINION_VERSION_RATING_COUNT_ID'})
	id: FactorOpinionRatingCount_Id

	@Column({name: 'COUNT'})
	count: FactorOpinionRatingCount_Count

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_OPINION_VERSION_ID'})
	factorOpinionVersion: FactorOpinionVersion

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
