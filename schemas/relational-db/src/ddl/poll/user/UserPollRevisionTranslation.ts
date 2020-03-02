import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                           from '@airport/air-control'
import {CascadeType}                        from '@airport/ground-control'
import {UserPollRevisionTranslation_Id}    from '../../../types/poll/user/UserPollRevisionTranslation'
import {MutableActorRow}         from '../../infrastructure/row/MutableActorRow'
import {PollRevisionTranslation}            from '../revision/translation/PollRevisionTranslation'
import {UserPollRevision}                  from './UserPollRevision'
import {UserPollRevisionTranslationRating} from './UserPollRevisionTranslationRating'

/**
 * User records for a particular User Poll RevisionTranslation.
 */
@Entity()
@Table({name: 'USER_POLL_REVISION_TRANSLATIONS'})
export class UserPollRevisionTranslation
	extends MutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'USER_POLL_REVISION_TRANSLATION_ID'})
	id: UserPollRevisionTranslation_Id

	@ManyToOne()
	@JoinColumn({
		name: 'USER_POLL_REVISION_ID',
		nullable: false
	})
	userPollRevision: UserPollRevision

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_TRANSLATION_ID'})
	revisionTranslation: PollRevisionTranslation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'userPollRevisionTranslation'})
	ratings: UserPollRevisionTranslationRating[]

}
