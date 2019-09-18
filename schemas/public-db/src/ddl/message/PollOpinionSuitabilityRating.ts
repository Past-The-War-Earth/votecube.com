import {
	Entity,
	JoinColumn,
	ManyToOne,
	Table
}                          from '@airport/air-control'
import {SuitabilityRating} from '../infrastructure/SuitabilityRating'
import {PollOpinion}       from './PollOpinion'

@Entity()
@Table({name: 'POLL_OPINION_SUITABILITY_RATING'})
export class PollOpinionSuitabilityRating {

	@ManyToOne()
	@JoinColumn({name: 'POLL_OPINION_ID'})
	pollOpinion: PollOpinion

	@ManyToOne()
	@JoinColumn({name: 'SUITABILITY_RATING_ID'})
	suitabilityRating: SuitabilityRating

}
