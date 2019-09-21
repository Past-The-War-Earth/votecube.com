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
import {ImmutableActorRow} from '../../infrastructure/ImmutableActorRow'
import {Language}          from '../../infrastructure/Language'
import {PositionVariation} from './PositionVariation'

export type PositionVariationTranslation_Id = number
export type PositionVariationTranslation_Description = string

@Entity()
@Table({name: 'POSITION_VARIATION_TRANSLATIONS'})
export class PositionVariationTranslation
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'POSITION_VARIATION_TRANSLATION_ID'})
	id: PositionVariationTranslation_Id

	@Column({name: 'POSITION_DESCRIPTION'})
	description: PositionVariationTranslation_Description

	@ManyToOne()
	@JoinColumn({name: 'POSITION_VARIATION_ID'})
	positionVariation: PositionVariation

	/* Cannot be used because PositionVariationTranslations can be reused
	 across polls
	// A shortcut to get to this translation quicker from Poll Variation quicker
	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID'})
	pollVariation: PollVariation
*/

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_POSITION_VARIATION_TRANSLATION_ID',
		referencedColumnName: 'POSITION_VARIATION_TRANSLATION_ID'
	})
	parent: PositionVariationTranslation

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: PositionVariationTranslation[]

	/*
		No translation types for Factors/Positions,
		they always come along with the poll.
		@ManyToOne()
		@JoinColumn({name: 'TRANSLATION_TYPE_ID', nullable: false})
		translationType: TranslationType
	 */

}
