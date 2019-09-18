import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                          from '@airport/air-control'
import {SuitabilityRating} from '../../infrastructure/SuitabilityRating'
import {Poll}              from '../Poll'
import {PollVariation}     from '../variation/PollVariation'

export type UserPoll_Id = number

@Entity()
@Table({name: 'USER_POLLS'})
export class UserPoll {

	@Id()
	@GeneratedValue()
	@Column({name: 'USER_POLL_VARIATION_ID'})
	id: UserPoll_Id

	@ManyToOne()
	@JoinColumn({name: 'SUITABILITY_RATING_ID'})
	suitabilityRating: SuitabilityRating

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pinnedVariation: PollVariation

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID'})
	poll: Poll

}
