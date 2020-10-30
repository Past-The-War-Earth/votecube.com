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
import {PollRevisionFactorPosition}         from '../poll/revision/PollRevisionFactorPosition'
import {PollRevisionOpinion}                from './PollRevisionOpinion'
import {PositionOpinionVersionTranslation,} from './translation/PositionOpinionVersionTranslation'

/**
 * Belongs to FactorOpinionVersion - does not need user or creation tracking.
 */
@Entity()
@Table({name: 'POSITION_OPINION_VERSIONS'})
// User information recorded at PollRevisionOpinion level
export class PositionOpinionVersion {

	@GeneratedValue()
	@Id()
	@Column({name: 'POSITION_OPINION_VERSION_ID'})
	id: PositionOpinionVersion_Id

	@ManyToOne()
	@JoinColumn({
		name: 'POLL_REVISION_OPINION_ID', nullable: false
	})
	pollRevisionOpinion: PollRevisionOpinion

	@ManyToOne()
	@JoinColumn({
		name: 'POLL_REVISION_FACTOR_POSITION_ID', nullable: false
	})
	factorPosition: PollRevisionFactorPosition

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POSITION_OPINION_VERSION_ID',
		referencedColumnName: 'POSITION_OPINION_VERSION_ID'
	})
	parent: PositionOpinionVersion

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PositionOpinionVersion[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'positionOpinionVersion'})
	translations: PositionOpinionVersionTranslation[]

}
