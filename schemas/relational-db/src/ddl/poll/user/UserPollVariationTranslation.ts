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
import {UserPollVariationTranslation_Id}    from '../../../types/poll/user/UserPollVariationTranslation'
import {MutableActorRow}                    from '../../infrastructure/row/MutableActorRow'
import {PollVariationTranslation}           from '../../poll/variation/translation/PollVariationTranslation'
import {UserPollVariation}                  from './UserPollVariation'
import {UserPollVariationTranslationRating} from './UserPollVariationTranslationRating'

/**
 * User records for a particular User Poll VariationTranslation.
 */
@Entity()
@Table({name: 'USER_POLL_VARIATION_TRANSLATIONS'})
export class UserPollVariationTranslation
	extends MutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'USER_POLL_VARIATION_TRANSLATION_ID'})
	id: UserPollVariationTranslation_Id

	@ManyToOne()
	@JoinColumn({
		name: 'USER_POLL_VARIATION_ID',
		nullable: false
	})
	userPollVariation: UserPollVariation

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_TRANSLATION_ID'})
	variationTranslation: PollVariationTranslation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'userPollVariationTranslation'})
	ratings: UserPollVariationTranslationRating[]

}
