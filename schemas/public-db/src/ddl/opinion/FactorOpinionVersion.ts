import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                        from '@airport/air-control'
import {CascadeType}                     from '@airport/ground-control'
import {Language}                        from '../infrastructure/Language'
import {PollFactorVariation}             from '../poll/variation/structure/PollFactorVariation'
import {FactorOpinionVersionRatingCount} from './count/FactorOpinionVersionRatingCount'
import {PollOpinionVersion}              from './PollOpinionVersion'
import {PositionOpinionVersion}          from './PositionOpinionVersion'
import {FactorOpinionVersionTranslation} from './translation/FactorOpinionVersionTranslation'
import {FactorOpinionVersionRating}      from './user/FactorOpinionVersionRating'

export type FactorOpinionVersion_Id = number

/**
 * Belongs to PollOpinionVersion - does not need user or creation tracking.
 */
@Entity()
@Table({name: 'FACTOR_OPINION_VERSIONS'})
export class FactorOpinionVersion {

	@GeneratedValue()
	@Id()
	@Column({name: 'FACTOR_OPINION_VERSION_ID'})
	id: FactorOpinionVersion_Id

	@ManyToOne()
	@JoinColumn({
		name: 'POLL_OPINION_VERSION_ID', nullable: false
	})
	pollOpinionVersion: PollOpinionVersion

	@ManyToOne()
	@JoinColumn({name: 'POLL_FACTOR_VARIATION_ID', nullable: false})
	pollFactorVariation: PollFactorVariation

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'factorOpinionVersion'})
	ratings: FactorOpinionVersionRating[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'factorOpinionVersion'})
	translations: FactorOpinionVersionTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'factorOpinionVersion'})
	positions: PositionOpinionVersion[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'factorOpinionVersion'})
	ratingCounts: FactorOpinionVersionRatingCount[]

}
