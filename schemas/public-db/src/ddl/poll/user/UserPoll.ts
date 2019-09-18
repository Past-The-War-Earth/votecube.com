import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                          from '@airport/air-control'
import {CascadeType}       from '@airport/ground-control'
import {Poll}              from '../Poll'
import {PollVariation}     from '../variation/PollVariation'
import {UserPollVariation} from './UserPollVariation'

export type UserPoll_Id = number

@Entity()
@Table({name: 'USER_POLLS'})
export class UserPoll {

	@Id()
	@GeneratedValue()
	@Column({name: 'USER_POLL_VARIATION_ID'})
	id: UserPoll_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pinnedVariation: PollVariation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'userPoll'})
	userPollVariations: UserPollVariation[]

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID'})
	poll: Poll

}
