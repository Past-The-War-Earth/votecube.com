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
import {
	FactorOpinionRating_Id,
	FactorOpinionRating_IsCurrent
}                             from '../../../types/opinion/user/FactorOpinionVersionRating'
import {Rating}               from '../../infrastructure/rating/Rating'
import {ImmutableActorRow}    from '../../infrastructure/row/ImmutableActorRow'
import {FactorOpinionVersion} from '../FactorOpinionVersion'

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

	@Column({name: 'FACTOR_OPINION_VERSION_RATING_IS_CURRENT'})
	isCurrent: FactorOpinionRating_IsCurrent

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
