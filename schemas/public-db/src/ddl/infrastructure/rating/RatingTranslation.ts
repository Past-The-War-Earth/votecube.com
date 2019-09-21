import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {Language}           from '../Language'
import {SystemGeneratedRow} from '../SystemGeneratedRow'
import {Rating}             from './Rating'

export type RatingTranslation_Id = number
export type RatingTranslation_Name = string
export type RatingTranslation_Description = string

@Entity()
@Table({name: 'RATING_TRANSLATIONS'})
export class RatingTranslation
	extends SystemGeneratedRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'RATING_TRANSLATION_ID'})
	id: RatingTranslation_Id

	@ManyToOne()
	@JoinColumn({name: 'RATING_ID', nullable: false})
	rating: Rating

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID', nullable: false})
	language: Language

	@Column({name: 'RATING_NAME', nullable: false})
	name: RatingTranslation_Name

	@Column({name: 'RATING_DESCRIPTION', nullable: false})
	description: RatingTranslation_Description

}
