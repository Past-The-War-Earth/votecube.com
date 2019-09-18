import {
	Entity,
	JoinColumn,
	ManyToOne,
	Table
}                      from '@airport/air-control'
import {Poll}          from '../Poll'
import {PollVariation} from './PollVariation'

@Entity()
@Table({name: 'DEFAULT_POLL_VARIATIONS'})
export class DefaultPollVariation {

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID'})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	variation: PollVariation
}
