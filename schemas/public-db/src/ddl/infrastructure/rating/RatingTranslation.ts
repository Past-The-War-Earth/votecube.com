import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {
	RatingTranslation_Description,
	RatingTranslation_Id,
	RatingTranslation_Name
}                           from '../../../types/infrastructure/rating/RatingTranslation'
import {Language}           from '../Language'
import {SystemGeneratedRow} from '../row/SystemGeneratedRow'
import {Rating}             from './Rating'

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
