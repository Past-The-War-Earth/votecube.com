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
import {
	UserPoll_Id,
	UserPoll_PinnedExplicitly
}                          from '../../../types/poll/user/UserPoll'
import {MutableActorRow}   from '../../infrastructure/row/MutableActorRow'
import {Poll}              from '../Poll'
import {PollVariation}     from '../variation/PollVariation'
import {UserPollRating}    from './UserPollRating'
import {UserPollVariation} from './UserPollVariation'

/**
 * This is a mutable record - its OK because it pertains only to a given user,
 * hence it will be retrieved (publically) only by that user.  Immutablity
 * does not help much here.
 */
@Entity()
@Table({name: 'USER_POLLS'})
export class UserPoll
	extends MutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'USER_POLL_ID'})
	id: UserPoll_Id

	@Column({name: 'USER_POLL_PINNED_EXPLICITLY', nullable: false})
	pinnedExplicitly: UserPoll_PinnedExplicitly

	@ManyToOne()
	@JoinColumn({name: 'POLL_ID'})
	poll: Poll

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pinnedVariation: PollVariation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'userPoll'})
	userPollVariations: UserPollVariation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'userPoll'})
	ratings: UserPollRating[]

}
