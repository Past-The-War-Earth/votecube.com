import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                                from '@airport/air-control'
import {Language}                from '../Language'
import {RatingReason} from './RatingReason'

export type RatingReasonTranslation_Id = number
export type RatingReasonTranslation_Name = string
export type RatingReasonTranslation_Description = string

@Entity()
@Table({name: 'RATING_REASON_TRANSLATIONS'})
export class RatingReasonTranslation {

	@Id()
	@GeneratedValue()
	@Column({name: 'RATING_REASON_TRANSLATION_ID'})
	id: RatingReasonTranslation_Id

	@ManyToOne()
	@JoinColumn({name: 'RATING_REASON_ID', nullable: false})
	reason: RatingReason

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID', nullable: false})
	language: Language

	@Column({name: 'RATING_REASON_NAME', nullable: false})
	name: RatingReasonTranslation_Name

	@Column({name: 'RATING_REASON_DESCRIPTION', nullable: false})
	description: RatingReasonTranslation_Description

}
