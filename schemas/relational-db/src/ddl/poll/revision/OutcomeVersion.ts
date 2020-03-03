import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                          from '@airport/air-control'
import {CascadeType}       from '@airport/ground-control'
import {OutcomeVersion_Id} from '../../../types/poll/revision/OutcomeVersion'
import {PollRevision}      from './PollRevision'

@Entity()
@Table({name: 'OUTCOME_VERSIONS'})
export class OutcomeVersion {

	@Id()
	@GeneratedValue()
	@Column({name: 'OUTCOME_VERSION_ID'})
	id: OutcomeVersion_Id

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_OUTCOME_VERSION_ID',
		referencedColumnName: 'OUTCOME_VERSION_ID'
	})
	parent: OutcomeVersion

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: OutcomeVersion[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'outcomeVersionA'})
	pollRevisionsA: PollRevision[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'outcomeVersionB'})
	pollRevisionsB: PollRevision[]

}
