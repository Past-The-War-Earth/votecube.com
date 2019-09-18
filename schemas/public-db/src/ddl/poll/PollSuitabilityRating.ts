import {
	Entity,
	JoinColumn,
	ManyToOne,
	Table
}                          from '@airport/air-control'
import {SuitabilityRating} from '../infrastructure/SuitabilityRating'
import {Poll}              from './Poll'

@Entity()
@Table({name: 'POLL_SUITABILITY_RATINGS'})
export class PollSuitabilityRating {

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID'})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'SUITABILITY_RATING_ID'})
	suitabilityRating: SuitabilityRating

}
