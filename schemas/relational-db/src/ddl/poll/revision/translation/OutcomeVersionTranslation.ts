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
	OutcomeVersionTranslation_Id,
	OutcomeVersionTranslation_Name
}                          from '../../../../types/poll/revision/translation/OutcomeVersionTranslation'
import {Language}          from '../../../infrastructure/Language'
import {ImmutableActorRow} from '../../../infrastructure/row/ImmutableActorRow'
import {TranslationType}   from '../../../infrastructure/TranslationType'
import {OutcomeVersion}    from '../OutcomeVersion'

/**
 * This the translation of a given poll revision.
 *
 */
@Entity()
@Table({name: 'OUTCOME_VERSION_TRANSLATIONS'})
export class OutcomeVersionTranslation
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'OUTCOME_VERSION_TRANSLATION_ID'})
	id: OutcomeVersionTranslation_Id

	@Column({name: 'NAME'})
	name: OutcomeVersionTranslation_Name

	@ManyToOne()
	@JoinColumn({name: 'OUTCOME_VERSION_ID'})
	outcomeVersion: OutcomeVersion

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@ManyToOne()
	@JoinColumn({name: 'TRANSLATION_TYPE_ID'})
	type: TranslationType

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_OUTCOME_VERSION_TRANSLATION_ID',
		referencedColumnName: 'OUTCOME_VERSION_TRANSLATION_ID'
	})
	parent: OutcomeVersionTranslation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: OutcomeVersionTranslation[]

}
