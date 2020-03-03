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

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'positionOpinionVersion'})
	ratings: PositionOpinionVersionRating[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'positionOpinionVersion'})
	translations: PositionOpinionVersionTranslation[]

}
