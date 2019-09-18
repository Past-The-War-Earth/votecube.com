import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                      from '@airport/air-control'
import {Rating}        from '../../infrastructure/rating/Rating'
import {FactorOpinion} from '../FactorOpinion'

export type FactorOpinionRating_Id = number

@Entity()
@Table({name: 'FACTOR_OPINION_RATING'})
export class FactorOpinionRating {

	@Id()
	@GeneratedValue()
	@Column({name: 'FACTOR_OPINION_RATING_ID'})
	id: FactorOpinionRating_Id

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_OPINION_ID'})
	factorOpinion: FactorOpinion

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
