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
import {
	OutcomeTranslation_Id,
	OutcomeTranslation_Name
}                          from '../../../../types/poll/revision/translation/OutcomeTranslation'
import {Language}          from '../../../infrastructure/Language'
import {ImmutableActorRow} from '../../../infrastructure/row/ImmutableActorRow'
import {TranslationType} from '../../../infrastructure/TranslationType'
import {Outcome}         from '../Outcome'

/**
 * This the translation of a given poll revision.
 *
 */
@Entity()
@Table({name: 'OUTCOME_TRANSLATIONS'})
export class OutcomeTranslation
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'OUTCOME_TRANSLATION_ID'})
	id: OutcomeTranslation_Id

	@Column({name: 'NAME'})
	name: OutcomeTranslation_Name

	@ManyToOne()
	@JoinColumn({name: 'OUTCOME_ID'})
	outcome: Outcome

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@ManyToOne()
	@JoinColumn({name: 'TRANSLATION_TYPE_ID'})
	type: TranslationType

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_OUTCOME_TRANSLATION_ID',
		referencedColumnName: 'OUTCOME_TRANSLATION_ID'
	})
	parent: OutcomeTranslation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: OutcomeTranslation[]



}
