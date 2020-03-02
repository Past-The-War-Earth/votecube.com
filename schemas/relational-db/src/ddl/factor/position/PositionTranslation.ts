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
	PositionTranslation_Description,
	PositionTranslation_Id
}                          from '../../../types/factor/position/PositionTranslation'
import {Language}          from '../../infrastructure/Language'
import {ImmutableActorRow} from '../../infrastructure/row/ImmutableActorRow'
import {Position}          from './Position'


@Entity()
@Table({name: 'POSITION_TRANSLATIONS'})
export class PositionTranslation
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'POSITION_TRANSLATION_ID'})
	id: PositionTranslation_Id

	@Column({name: 'POSITION_DESCRIPTION'})
	description: PositionTranslation_Description

	@ManyToOne()
	@JoinColumn({name: 'POSITION_ID'})
	position: Position

	/* Cannot be used because PositionTranslations can be reused
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
		name: 'PARENT_POSITION_TRANSLATION_ID',
		referencedColumnName: 'POSITION_TRANSLATION_ID'
	})
	parent: PositionTranslation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PositionTranslation[]

	/*
		No translation types for Factors/Positions,
		they always come along with the poll.
		@ManyToOne()
		@JoinColumn({name: 'TRANSLATION_TYPE_ID', nullable: false})
		translationType: TranslationType
	 */

}
