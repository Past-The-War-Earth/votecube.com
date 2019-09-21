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
import {MutableActorRow}   from '../../..'
import {Poll}              from '../Poll'
import {PollVariation}     from '../variation/PollVariation'
import {UserPollVariation} from './UserPollVariation'

export type UserPoll_Id = number
export type UserPoll_PinnedExplicitly = boolean

/**
 * This is a mutable record - its OK because it pertains only to a given user,
 * hence it will be retrieved (publically) only by that user.  Immutablity
 * does not by much here.
 */
@Entity()
@Table({name: 'USER_POLLS'})
export class UserPoll
	extends MutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'USER_POLL_ID'})
	id: UserPoll_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pinnedVariation: PollVariation

	@Column({name: 'USER_POLL_PINNED_EXPLICITLY', nullable: false})
	pinnedExplicitly: UserPoll_PinnedExplicitly

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'userPoll'})
	userPollVariations: UserPollVariation[]

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID'})
	poll: Poll

}
