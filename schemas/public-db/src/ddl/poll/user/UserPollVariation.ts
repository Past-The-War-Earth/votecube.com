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
import {MutableActorRow}              from '../../infrastructure/MutableActorRow'
import {PollVariation}                from '../variation/PollVariation'
import {UserPoll}                     from './UserPoll'
import {UserPollVariationRating}      from './UserPollVariationRating'
import {UserPollVariationTranslation} from './UserPollVariationTranslation'

export type UserPollVariation_Id = number

/**
 * User records for a particular variation
 */
@Entity()
@Table({name: 'USER_POLL_VARIATIONS'})
export class UserPollVariation
	extends MutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'USER_POLL_VARIATION_ID'})
	id: UserPollVariation_Id

	@ManyToOne()
	@JoinColumn({
		name: 'USER_POLL_ID',
		nullable: false
	})
	userPoll: UserPoll

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	variation: PollVariation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'userPollVariation'})
	translations: UserPollVariationTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'userPollVariation'})
	ratings: UserPollVariationRating[]

}
