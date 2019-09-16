import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                          from '@airport/air-control'
import {SuitabilityRating} from '../../SuitabilityRating'
import {Poll}              from '../Poll'
import {PollVariation}     from '../PollVariation'

export type UserPollVariation_Id = number

@Entity()
@Table({name: 'USER_POLL_VARIATIONS'})
export class UserPollVariation {

	@Id()
	@GeneratedValue()
	@Column({name: 'USER_POLL_VARIATION_ID'})
	id: UserPollVariation_Id

	@ManyToOne()
	@JoinColumn({name: 'SUITABILITY_RATING_ID'})
	suitabilityRating: SuitabilityRating

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID'})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	variation: PollVariation

}
