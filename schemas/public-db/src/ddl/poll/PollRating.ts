import {
	Entity,
	JoinColumn,
	ManyToOne,
	Table
}               from '@airport/air-control'
import {Rating} from '../infrastructure/Rating/Rating'
import {Poll}   from './Poll'

/**
 * TODO: will be generated from PollVariationRating computations, manual for now
 */
@Entity()
@Table({name: 'POLL_RATINGS'})
export class PollRating {

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID'})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

}
