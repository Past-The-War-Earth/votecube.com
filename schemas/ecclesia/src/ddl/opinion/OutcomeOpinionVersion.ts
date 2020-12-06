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
import {OutcomeOpinionVersion_Id}         from '../../types/opinion/OutcomeOpinionVersion'
import {Outcome}                          from '../poll/revision/Outcome'
import {PollRevisionOpinion}              from './PollRevisionOpinion'
import {OutcomeOpinionVersionTranslation} from './translation/OutcomeOpinionVersionTranslation'

@Entity()
@Table({name: 'OUTCOME_OPINION_VERSIONS'})
// User information recorded at PollRevisionOpinion level
export class OutcomeOpinionVersion {

	@GeneratedValue()
	@Id()
	@Column({name: 'OUTCOME_OPINION_VERSION_ID'})
	id: OutcomeOpinionVersion_Id

	@ManyToOne()
	@JoinColumn({
		name: 'POLL_REVISION_OPINION_ID', nullable: false
	})
	pollRevisionOpinion: PollRevisionOpinion

	@ManyToOne()
	@JoinColumn({
		name: 'OUTCOME_ID', nullable: false
	})
	outcome: Outcome

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_OUTCOME_OPINION_VERSION_ID',
		referencedColumnName: 'OUTCOME_OPINION_VERSION_ID'
	})
	parent: OutcomeOpinionVersion

	@OneToMany({mappedBy: 'parent'})
	children: OutcomeOpinionVersion[]

	@OneToMany({mappedBy: 'outcomeOpinionVersion'})
	translations: OutcomeOpinionVersionTranslation[]

}
