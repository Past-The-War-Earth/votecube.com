import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                     from '@airport/air-control'
import {CascadeType}                  from '@airport/ground-control'
import {UserPollRevision_Id}         from '../../../types/poll/user/UserPollRevision'
import {MutableActorRow} from '../../infrastructure/row/MutableActorRow'
import {PollRevision}    from '../revision/PollRevision'
import {UserPoll}                     from './UserPoll'
import {UserPollRevisionRating}      from './UserPollRevisionRating'
import {UserPollRevisionTranslation} from './UserPollRevisionTranslation'

/**
 * User records for a particular revision
 */
@Entity()
@Table({name: 'USER_POLL_REVISIONS'})
export class UserPollRevision
	extends MutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'USER_POLL_REVISION_ID'})
	id: UserPollRevision_Id

	@ManyToOne()
	@JoinColumn({
		name: 'USER_POLL_ID',
		nullable: false
	})
	userPoll: UserPoll

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_ID'})
	revision: PollRevision

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'userPollRevision'})
	translations: UserPollRevisionTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'userPollRevision'})
	ratings: UserPollRevisionRating[]

}
