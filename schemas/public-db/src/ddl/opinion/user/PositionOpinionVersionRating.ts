import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                               from '@airport/air-control'
import {CascadeType}            from '@airport/ground-control'
import {ImmutableActorRow}      from '../../infrastructure/ImmutableActorRow'
import {Rating}                 from '../../infrastructure/rating/Rating'
import {PositionOpinionVersion} from '../PositionOpinionVersion'

export type PositionOpinionRating_Id = number
export type PositionOpinionRating_IsCurrent = boolean

/**
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
@Entity()
@Table({name: 'POSITION_OPINION_VERSION_RATINGS'})
export class PositionOpinionVersionRating
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'POSITION_OPINION_VERSION_RATING_ID'})
	id: PositionOpinionRating_Id

	@Column({name: 'POSITION_OPINION_VERSION_RATING_IS_CURRENT'})
	isCurrent: PositionOpinionRating_IsCurrent

	@ManyToOne()
	@JoinColumn({name: 'POSITION_OPINION_VERSION_ID'})
	positionOpinionVersion: PositionOpinionVersion

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POSITION_OPINION_VERSION_RATING_ID',
		referencedColumnName: 'POSITION_OPINION_VERSION_RATING_ID'
	})
	parent: PositionOpinionVersionRating

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	child: PositionOpinionVersionRating[]

}
