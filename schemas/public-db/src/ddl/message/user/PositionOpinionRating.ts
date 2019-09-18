import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                    from '@airport/air-control'
import {Rating}      from '../../infrastructure/rating/Rating'
import {PositionOpinion} from '../PositionOpinion'

export type PositionOpinionRating_Id = number

@Entity()
@Table({name: 'POSITION_OPINION_RATING'})
export class PositionOpinionRating {

	@Id()
	@GeneratedValue()
	@Column({name: 'POSITION_OPINION_RATING_ID'})
	id: PositionOpinionRating_Id

	@ManyToOne()
	@JoinColumn({name: 'POSITION_OPINION_ID'})
	positionOpinion: PositionOpinion

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
