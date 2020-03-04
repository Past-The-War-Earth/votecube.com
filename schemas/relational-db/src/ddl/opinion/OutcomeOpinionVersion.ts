import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                         from '@airport/air-control'
import {CascadeType}                      from '@airport/ground-control'
import {OutcomeOpinionVersion_Id}         from '../../types/opinion/OutcomeOpinionVersion'
import {PollRevisionOpinionVersion}       from './PollRevisionOpinionVersion'
import {OutcomeOpinionVersionTranslation} from './translation/OutcomeOpinionVersionTranslation'

@Entity()
@Table({name: 'OUTCOME_OPINION_VERSIONS'})
export class OutcomeOpinionVersion {

	@GeneratedValue()
	@Id()
	@Column({name: 'OUTCOME_OPINION_VERSION_ID'})
	id: OutcomeOpinionVersion_Id

	@ManyToOne()
	@JoinColumn({
		name: 'POLL_REVISION_OPINION_VERSION_ID', nullable: false
	})
	pollRevisionOpinionVersion: PollRevisionOpinionVersion

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'outcomeOpinionVersion'})
	translations: OutcomeOpinionVersionTranslation[]

}
