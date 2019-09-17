import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                   from '@airport/air-control'
import {ImmutableRow}               from '../../ImmutableRow'
import {Language}                   from '../../Language'
import {PositionVariationTranslation} from './PositionVariationTranslation'

export type PositionTranslation_Id = number
export type PositionTranslation_Description = string

/**
 * This the computed translation (based on most pinned position variation).
 *
 */
@Entity()
@Table({name: 'POSITION_TRANSLATIONS'})
export class PositionTranslation
	extends ImmutableRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POSITION_TRANSLATION_ID'})
	id: PositionTranslation_Id

	@Column({name: 'POSITION_TRANSLATION_DESCRIPTION', nullable: false})
	description: PositionTranslation_Description

	@ManyToOne()
	@JoinColumn({name: 'POSITION_ID', nullable: false})
	position: Position

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID'})
	language: Language

	@ManyToOne()
	@JoinColumn({
		name: 'CURRENT_POLL_VARIATION_TRANSLATION_ID',
		nullable: false,
		referencedColumnName: 'POLL_VARIATION_TRANSLATION_ID'
	})
	currentVariation: PositionVariationTranslation

}
