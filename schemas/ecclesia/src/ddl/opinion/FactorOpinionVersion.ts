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
import {Factor}                          from '../factor/Factor'
import {PollRevisionOpinion}             from './PollRevisionOpinion'
import {FactorOpinionVersionTranslation} from './translation/FactorOpinionVersionTranslation'

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
		name: 'POLL_REVISION_OPINION_ID', nullable: false
	})
	pollRevisionOpinion: PollRevisionOpinion

	@ManyToOne()
	@JoinColumn({
		name: 'FACTOR_ID', nullable: false
	})
	factor: Factor

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_FACTOR_OPINION_VERSION_ID',
		referencedColumnName: 'FACTOR_OPINION_VERSION_ID'
	})
	parent: FactorOpinionVersion

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: FactorOpinionVersion[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'factorOpinionVersion'})
	translations: FactorOpinionVersionTranslation[]

}
