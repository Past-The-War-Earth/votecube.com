import {
	Column,
	DbString,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
} from '@airport/air-control'
import {CascadeType}        from '@airport/ground-control'
import {
	Outcome_Id,
	Outcome_Ordinal,
	Outcome_Name
} from '../../../types/poll/revision/Outcome'
import {PollRevision}       from './PollRevision'
import {OutcomeTranslation} from './translation/OutcomeTranslation'

@Entity()
@Table({name: 'OUTCOMES'})
export class Outcome {

	@Id()
	@GeneratedValue()
	@Column({name: 'OUTCOME_ID'})
	id: Outcome_Id

	@Column({name: 'KEY'})
	@DbString()
	key: Outcome_Ordinal

	@Column({name: 'NAME'})
	name: Outcome_Name

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_OUTCOME_TRANSLATION_ID',
		referencedColumnName: 'OUTCOME_TRANSLATION_ID'
	})
	parentTranslation: OutcomeTranslation

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_OUTCOME_ID',
		referencedColumnName: 'OUTCOME_ID'
	})
	parent: Outcome

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: Outcome[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'outcomeVersionA'})
	pollRevisionsA: PollRevision[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'outcomeVersionB'})
	pollRevisionsB: PollRevision[]

}
