import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                           from '@airport/air-control'
import {Outcome_Id}         from '../../../types/poll/revision/Outcome'
import {AgeSuitableRow}     from '../../infrastructure/row/AgeSuitableRow'
import {PollRevision}       from './PollRevision'
import {OutcomeTranslation} from './translation/OutcomeTranslation'

@Entity()
@Table({name: 'OUTCOMES'})
export class Outcome
	extends AgeSuitableRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'OUTCOME_ID'})
	id: Outcome_Id

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

	@OneToMany({mappedBy: 'parent'})
	children: Outcome[]

	@OneToMany({mappedBy: 'outcomeVersionA'})
	pollRevisionsA: PollRevision[]

	@OneToMany({mappedBy: 'outcomeVersionB'})
	pollRevisionsB: PollRevision[]

}
