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
import {PositionOpinionVersion_Id}          from '../../types/opinion/PositionOpinionVersion'
import {Language}                           from '../infrastructure/Language'
import {PollPositionVariation}              from '../poll/variation/structure/PollPositionVariation'
import {PositionOpinionVersionRatingCount}  from './count/PositionOpinionVersionRatingCount'
import {FactorOpinionVersion}               from './FactorOpinionVersion'
import {PositionOpinionVersionTranslation,} from './translation/PositionOpinionVersionTranslation'
import {PositionOpinionVersionRating}       from './user/PositionOpinionVersionRating'

/**
 * Belongs to FactorOpinionVersion - does not need user or creation tracking.
 */
@Entity()
@Table({name: 'POSITION_OPINION_VERSIONS'})
export class PositionOpinionVersion {

	@GeneratedValue()
	@Id()
	@Column({name: 'POSITION_OPINION_VERSION_ID'})
	id: PositionOpinionVersion_Id

	@ManyToOne()
	@JoinColumn({
		name: 'FACTOR_OPINION_VERSION_ID', nullable: false
	})
	factorOpinionVersion: FactorOpinionVersion

	@ManyToOne()
	@JoinColumn({name: 'POLL_POSITION_VARIATION_ID', nullable: false})
	pollPositionVariation: PollPositionVariation

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'positionOpinionVersion'})
	ratings: PositionOpinionVersionRating[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'positionOpinionVersion'})
	translations: PositionOpinionVersionTranslation[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'positionOpinionVersion'})
	ratingCounts: PositionOpinionVersionRatingCount[]

}
