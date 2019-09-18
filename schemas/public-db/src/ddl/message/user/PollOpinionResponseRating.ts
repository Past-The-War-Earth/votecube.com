import {
	Entity,
	JoinColumn,
	ManyToOne,
	Table
}                                       from '@airport/air-control'
import {Rating}                         from '../../infrastructure/rating/Rating'
import {PollOpinionResponseTranslation} from '../PollOpinionResponseTranslation'

@Entity()
@Table({name: 'POLL_OPINION_RESPONSE_RATING'})
export class PollOpinionResponseRating {

	@ManyToOne()
	@JoinColumn({name: 'POLL_OPINION_RESPONSE_ID'})
	pollOpinionResponseTranslation: PollOpinionResponseTranslation

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
