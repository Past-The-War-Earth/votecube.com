import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                             from '@airport/air-control'
import {CascadeType}          from '@airport/ground-control'
import {ImmutableActorRow}    from '../../infrastructure/ImmutableActorRow'
import {Rating}               from '../../infrastructure/rating/Rating'
import {FactorOpinionVersion} from '../FactorOpinionVersion'

export type FactorOpinionRating_Id = number

/**
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
@Entity()
@Table({name: 'FACTOR_OPINION_VERSION_RATINGS'})
export class FactorOpinionVersionRating
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'FACTOR_OPINION_VERSION_RATING_ID'})
	id: FactorOpinionRating_Id

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_OPINION_VERSION_ID'})
	factorOpinionVersion: FactorOpinionVersion

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID'})
	rating: Rating

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_FACTOR_OPINION_VERSION_RATING_ID',
		referencedColumnName: 'FACTOR_OPINION_VERSION_RATING_ID'
	})
	parent: FactorOpinionVersionRating

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	child: FactorOpinionVersionRating[]

}
