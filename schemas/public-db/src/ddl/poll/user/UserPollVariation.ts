import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                from '@airport/air-control'
import {CascadeType}             from '../../../../../../../airport/apis/ground-control/lib'
import {Poll}                    from '../Poll'
import {PollVariation}           from '../variation/PollVariation'
import {UserPollVariationRating} from './UserPollVariationRating'

export type UserPollVariation_Id = number

@Entity()
@Table({name: 'USER_POLL_VARIATIONS'})
export class UserPollVariation {

	@Id()
	@GeneratedValue()
	@Column({name: 'USER_POLL_VARIATION_ID'})
	id: UserPollVariation_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID'})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	variation: PollVariation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'userPollVariation'})
	ratings: UserPollVariationRating[]

}
