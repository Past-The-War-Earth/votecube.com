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
import {FactorOpinionVersion_Id}         from '../../types/opinion/FactorOpinionVersion'
import {PollRevisionOpinionVersion}      from './PollRevisionOpinionVersion'
import {PositionOpinionVersion}          from './PositionOpinionVersion'
import {FactorOpinionVersionTranslation} from './translation/FactorOpinionVersionTranslation'
import {FactorOpinionVersionRating}      from './user/FactorOpinionVersionRating'

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
		name: 'POLL_REVISION_OPINION_VERSION_ID', nullable: false
	})
	pollRevisionOpinionVersion: PollRevisionOpinionVersion

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'factorOpinionVersion'})
	ratings: FactorOpinionVersionRating[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'factorOpinionVersion'})
	translations: FactorOpinionVersionTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'factorOpinionVersion'})
	positionOpinionVersions: PositionOpinionVersion[]

}
