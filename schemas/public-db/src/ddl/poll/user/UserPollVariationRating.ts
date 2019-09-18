import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                          from '@airport/air-control'
import {Rating}            from '../../infrastructure/Rating/Rating'
import {PollVariation}     from '../variation/PollVariation'
import {UserPollVariation} from './UserPollVariation'

export type UserPollVariationRating_Id = number

@Entity()
@Table({name: 'USER_POLL_VARIATION_RATINGS'})
export class UserPollVariationRating {

	@Id()
	@GeneratedValue()
	@Column({name: 'USER_POLL_VARIATION_RATING_ID'})
	id: UserPollVariationRating_Id

	@Id()
	@GeneratedValue()
	@ManyToOne()
	@JoinColumn({name: 'USER_POLL_VARIATION_ID'})
	userPollVariation: UserPollVariation

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	variation: PollVariation

}
