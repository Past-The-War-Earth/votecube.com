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
import {CascadeType} from '@airport/ground-control'
import {
	FactorTranslation_Description,
	FactorTranslation_Id,
	FactorTranslation_Name
}                    from '../../types/factor/FactorTranslation'
import {Language}    from '../infrastructure/Language'
import {ImmutableActorRow} from '../infrastructure/row/ImmutableActorRow'
import {Factor}            from './Factor'

@Entity()
@Table({name: 'FACTOR_TRANSLATIONS'})
export class FactorTranslation
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'FACTOR_TRANSLATION_ID'})
	id: FactorTranslation_Id

	@Column({name: 'FACTOR_NAME'})
	name: FactorTranslation_Name

	@Column({name: 'FACTOR_DESCRIPTION'})
	description: FactorTranslation_Description

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_ID'})
	factor: Factor

	/* Cannot be used because FactorTranslations can be reused
	 across polls
		// A shortcut to get to this translation quicker from Poll Revision quicker
		@ManyToOne()
		@JoinColumn({name: 'POLL_REVISION_ID'})
		pollRevision: PollRevision
	*/

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_FACTOR_TRANSLATION_ID',
		referencedColumnName: 'FACTOR_TRANSLATION_ID'
	})
	parent: FactorTranslation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: FactorTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parentTranslation'})
	childFactors: Factor[]

	/*
		No translation types for Factors/Positions,
		they always come along with the poll.
		@ManyToOne()
		@JoinColumn({name: 'TRANSLATION_TYPE_ID', nullable: false})
		translationType: TranslationType
	 */

}
