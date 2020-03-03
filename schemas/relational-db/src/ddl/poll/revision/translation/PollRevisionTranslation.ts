import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                                                   from '@airport/air-control'
import {CascadeType}                                from '@airport/ground-control'
import {
	PollRevisionTranslation_Description,
	PollRevisionTranslation_Id,
	PollRevisionTranslation_Name
}                                                   from '../../../../types/poll/revision/translation/PollRevisionTranslation'
import {Language}                                   from '../../../infrastructure/Language'
import {ImmutableActorRow}                          from '../../../infrastructure/row/ImmutableActorRow'
import {TranslationType}                            from '../../../infrastructure/TranslationType'
import {UserPollRevisionTranslationRating} from '../../user/UserPollRevisionTranslationRating'
import {PollRevision}                               from '../PollRevision'
import {PollRevisionFactorTranslation}      from './PollRevisionFactorTranslation'
import {PollRevisionPositionTranslation}   from './PollRevisionPositionTranslation'

/**
 * This the translation of a given poll revision.
 *
 */
@Entity()
@Table({name: 'POLL_REVISION_TRANSLATIONS'})
export class PollRevisionTranslation
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'POLL_REVISION_TRANSLATION_ID'})
	id: PollRevisionTranslation_Id

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_ID'})
	pollRevision: PollRevision

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@Column({name: 'POLL_NAME'})
	name: PollRevisionTranslation_Name

	@ManyToOne()
	@JoinColumn({name: 'TRANSLATION_TYPE_ID'})
	type: TranslationType

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POLL_REVISION_TRANSLATION_ID',
		referencedColumnName: 'POLL_REVISION_TRANSLATION_ID'
	})
	parent: PollRevisionTranslation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PollRevisionTranslation[]

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'translation'})
	ratings: UserPollRevisionTranslationRating[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollRevisionTranslation'})
	factorTranslations: PollRevisionFactorTranslation[]

	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'pollRevisionTranslation'})
	positionTranslations: PollRevisionPositionTranslation[]

}
