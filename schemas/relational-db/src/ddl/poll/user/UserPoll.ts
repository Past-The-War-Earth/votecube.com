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
import {Poll}           from '../Poll'
import {PollRevision}   from '../revision/PollRevision'
import {UserPollRating}   from './UserPollRating'
import {UserPollRevision} from './UserPollRevision'

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
	@JoinColumn({name: 'POLL_REVISION_ID'})
	pinnedRevision: PollRevision

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'userPoll'})
	userPollRevisions: UserPollRevision[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'userPoll'})
	ratings: UserPollRating[]

}
