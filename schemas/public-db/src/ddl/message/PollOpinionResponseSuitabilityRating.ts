import {
	Entity,
	JoinColumn,
	ManyToOne,
	Table
}                          from '@airport/air-control'
import {SuitabilityRating} from '../infrastructure/SuitabilityRating'
import {PollOpinionResponse}       from './PollOpinionResponse'

@Entity()
@Table({name: 'POLL_OPINION_RESPONSE_SUITABILITY_RATING'})
export class PollOpinionResponseSuitabilityRating {

	@ManyToOne()
	@JoinColumn({name: 'POLL_OPINION_RESPONSE_ID'})
	pollOpinionResponse: PollOpinionResponse

	@ManyToOne()
	@JoinColumn({name: 'SUITABILITY_RATING_ID'})
	suitabilityRating: SuitabilityRating

}
