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
	RatingReasonTranslation_Description,
	RatingReasonTranslation_Id,
	RatingReasonTranslation_Name
} from '../../../types/infrastructure/rating/RatingReasonTranslation'
import {Language}           from '../Language'
import {SystemGeneratedRow} from '../row/SystemGeneratedRow'
import {RatingReason}       from './RatingReason'

@Entity()
@Table({name: 'RATING_REASON_TRANSLATIONS'})
export class RatingReasonTranslation
	extends SystemGeneratedRow {

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
