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
import {PollOpinion} from '../PollOpinion'

export type PollOpinionRating_Id = number

@Entity()
@Table({name: 'POLL_OPINION_RATING'})
export class PollOpinionRating {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_OPINION_RATING_ID'})
	id: PollOpinionRating_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_OPINION_ID'})
	pollOpinion: PollOpinion

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
